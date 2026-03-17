import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Providers } from "./providers.entity";
import { Models } from "./models.entity";
import { Conversations } from "./conversation.entity";

@Entity()
export class ModelProviderMapping{
    @PrimaryGeneratedColumn()
    id:number
    @ManyToOne(()=>Providers,(provider)=>provider.mappings)
    providerId:Providers    
    @ManyToOne(()=>Models,(models)=>models.mappings)
    modelId:Models
    @OneToMany(()=>Conversations,(conversation)=>conversation.modelProviderMappingId)
    @Column()
    inputTokenCost:number
    @Column()
    outTokenCost:number

}