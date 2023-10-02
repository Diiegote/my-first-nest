import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  title?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  description?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsIn([TaskStatus.DONDE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
