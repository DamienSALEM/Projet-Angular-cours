import { Controller, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Get()
    async showAllCategory(){
        const category = await this.categoryService.showAll();
        return{
            statusCode:HttpStatus.OK,
            message:'Catgeory successfully fetched',
            category
        };
    }
}
