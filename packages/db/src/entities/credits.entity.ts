import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { JoinColumn } from "typeorm";
@Entity()
export class Credits{
    @PrimaryGeneratedColumn()
    id:number
    @OneToOne(()=>User,(user)=>user.credits)
    @JoinColumn()
    userId:User
    @Column()
    amount!: number 
}