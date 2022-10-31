import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable:false})
    descricao: string 

    @ApiProperty({type: ()=> Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
}