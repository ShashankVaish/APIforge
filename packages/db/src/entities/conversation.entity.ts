import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { ApiKeys } from "./api-key.entity";
import { ModelProviderMapping } from "./model-provider-mapping.entity";
import { ManyToOne } from "typeorm/browser";

@Entity()
export class Conversations{
    @PrimaryGeneratedColumn()
    id:number 
    @ManyToOne(()=>User,(user)=>user.conversations)
    userId:User[]
    @OneToMany(()=>ApiKeys,(apikeys)=>apikeys.conversation)
    apiKeyId:ApiKeys[]
    @OneToMany(()=>ModelProviderMapping,(mapping)=>mapping)
    modelProviderMappingId:ModelProviderMapping[]
    @Column()
    input:string
    @Column()
    output:String
    @Column()
    inputTokenCount:number
    @Column()
    outputTokenCount:number 


    

}   