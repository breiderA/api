import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class TaskStatusService {
  tasksStatuRepository:any
  constructor(
    @InjectRepository(TaskStatus)
    private taskStatusRepository:Repository<TaskStatus>
  ){}
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskStatusRepository.save(createTaskStatusDto);
  }

  findAll() {
    return this.taskStatusRepository.find();
  }

  findOne(id: number) {
    return this.taskStatusRepository.findOneBy({id});
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.taskStatusRepository.update(id,updateTaskStatusDto);
  }

  remove(id: number) {
    return this.taskStatusRepository.delete(id);
  }
}
