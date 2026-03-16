import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class company{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    website:string

}