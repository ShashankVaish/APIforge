    
import  { Column, CreateDateColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ApiKeys } from './api-key.entity';
import { Credits } from './credits.entity';
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({unique:true})
    email:string

    @Column({unique:true})
    password:string

    @CreateDateColumn()
    createdIn:Date
    
    @OneToMany(()=>ApiKeys,(apikey)=>apikey.UserId)
    apiKeys!:ApiKeys[]
    @OneToOne(() => Credits, (credits) => credits.userId)
    credits!: Credits



}

