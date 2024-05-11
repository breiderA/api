import { Task } from "src/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email:string;
    @OneToMany(() =>Task,(tasks) => tasks.users)
    tasks:Task[]
}
