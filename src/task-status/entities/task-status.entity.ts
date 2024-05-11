import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskStatus {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description:string;
    @OneToMany(() => Task, (tasks) => tasks.TaskCategoty)
    tasks: Task[]

}
