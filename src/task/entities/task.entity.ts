import { TaskCategory } from "src/task-categories/entities/task-category.entity";
import { TaskStatus } from "src/task-status/entities/task-status.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    desciption:string;
    @Column()
    color:string;
    
    @ManyToOne(() => TaskCategory, (taskC) => taskC.tasks)
    taskC: TaskCategory

    @ManyToOne(() => TaskStatus, (taskS) => taskS.tasks)
    taskS: TaskStatus
    
    @ManyToOne(() =>User, (users)=>users.tasks)
    users:User[]
    TaskCategoty: any;


}
