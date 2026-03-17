    
import  { Column, CreateDateColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ApiKeys } from './api-key.entity';
import { Credits } from './credits.entity';
import { OnRampTransaction } from './onramp-transaction.entity';
import { Conversations } from './conversation.entity';
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
    @OneToMany(()=>OnRampTransaction,(transaction)=>transaction.userId)
    transaction:User[]
    @OneToMany(()=>Conversations,(conversation)=>conversation.userId)
    conversations:Conversations



}

