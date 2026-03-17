import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
export enum kol  {
   PROCESSING= 'processing',
  ABORT = 'abort',
   COMPLETE= 'complete',
}

@Entity()
export class OnRampTransaction{
    @PrimaryGeneratedColumn()
    id:number
    @ManyToOne(()=>User,(user)=>user.transaction)
    userId:User[]
    @Column()
    amount:number
    @Column({
        type:'enum',
         enum: kol,
    default: kol.PROCESSING
    })
    status:kol


    
}