import { Injectable } from '@nestjs/common';
import { TaskStatus, Task } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
    {
      id: '2',
      title: 'second task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
    {
      id: '3',
      title: 'third task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string): Task {
    const newTasks = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(newTasks);
    return newTasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
}
