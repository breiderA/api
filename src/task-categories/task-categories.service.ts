import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task-category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskCategoriesService {
  taskCategorieRepository:any
  constructor(
    @InjectRepository(TaskCategory)
    private taskCategoriesRepository:Repository<TaskCategory>

  ){}
  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskCategoriesRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.taskCategoriesRepository.find();
  }

  findOne(id: number) {
    return this.taskCategoriesRepository.findOneBy({id});
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.taskCategoriesRepository.update(id,updateTaskCategoryDto);
  }

  remove(id: number) {
    return this.taskCategoriesRepository.delete(id);
  }
}
