    
import decorators, { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    Id:Number

    @Column()
    Name:String

    @Column({unique:true})
    Email:String

    @Column({unique:true})
    Password:String

    @CreateDateColumn()
    CreatedIn:Date


}

