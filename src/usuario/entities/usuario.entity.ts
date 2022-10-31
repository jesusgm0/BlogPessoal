import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsEmail, MinLength } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number


    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsEmail()
    @ApiProperty({example: "email@email.com.br"})
    @Column({length: 255, nullable: false})
    usuario: string //e-mail

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    @Column({length: 255, nullable: false})
    senha: string

    @Column({length: 5000})
    @ApiProperty()
    foto: string


    @ApiProperty({type: ()=> Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]


}