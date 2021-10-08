import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { CatsPerArticlesService } from './cats-per-articles.service';


@Controller('cats-per-articles')
export class CatsPerArticlesController {
    constructor(private CatsPerArticlesService: CatsPerArticlesService){}

    @Get('id')
    async showCatsperarticles(id:string){
        
    }
}
