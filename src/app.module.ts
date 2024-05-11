import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskModule } from './task/task.module';
import { TaskCategoriesModule } from './task-categories/task-categories.module';
import { TaskStatusModule } from './task-status/task-status.module';
import { Task } from './task/entities/task.entity';
import { TaskCategory } from './task-categories/entities/task-category.entity';
import { TaskStatus } from './task-status/entities/task-status.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // 
      database: 'apinueva',
      entities: [User,Task,TaskCategory,TaskStatus],
      synchronize: true
    }),
    UserModule,
    TaskModule,
    TaskCategoriesModule,
    TaskStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

