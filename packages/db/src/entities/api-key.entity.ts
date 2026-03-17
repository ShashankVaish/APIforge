import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Decorator } from "typescript";
import { User } from "./user.entity";
import { Conversations } from "./conversation.entity";
@Entity()

export class ApiKeys{
    @PrimaryGeneratedColumn()
    Id!:number

    @ManyToOne(()=> User,(user)=>user.apiKeys)
    UserId!:User

    @Column()
    apikey!:string
    
    @Column()
    isDisabled!:boolean
    @OneToMany(()=>Conversations,(conversation)=>conversation.apiKeyId)
    conversation:Conversations[]
}