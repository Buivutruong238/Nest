import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum roles {
    ADMIN = "admin",
    USER = "user"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column() 
    email:string;

    @Column()
    password:string;

    @Column() 
    number:string;

    @Column({type: "enum", enum: roles, default: roles.USER})
    role:roles

    @Column({type:"boolean", default:false}) 
    isActive:boolean ;
}