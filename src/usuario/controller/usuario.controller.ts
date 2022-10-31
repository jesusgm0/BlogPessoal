import { Controller, Get, HttpCode, HttpStatus, Post, Body, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";



@Controller('/usuarios')
@ApiTags('Usuario')
@ApiBearerAuth()
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {   }

    @UseGuards()
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario);
    }


    @UseGuards()
    @HttpCode(HttpStatus.OK)
    @Put('/atualizar')
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario)
    }


}