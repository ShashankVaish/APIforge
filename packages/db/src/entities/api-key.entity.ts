import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Decorator } from "typescript";
import { User } from "./user.entity";
@Entity()

export class ApiKeys{
    @PrimaryGeneratedColumn()
    Id!:number

    @ManyToOne(()=> User,(user)=>user.apiKeys)
    UserId!:User

    @Column()
    apikey!:string
    
    @Column()
    isDisabled:boolean
}