import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModelProviderMapping } from "./model-provider-mapping.entity";

@Entity()
export class Providers{
    @PrimaryGeneratedColumn()
    // @JoinColumn()
    id:number
    @Column()
    name:string
    @Column()
    website:string
    @OneToMany(()=>ModelProviderMapping,(mapping)=>mapping.providerId)
    mappings:ModelProviderMapping[]



}