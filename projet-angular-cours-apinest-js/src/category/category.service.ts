import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './Entity/category.entity';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository:Repository<Category>,
    ){}
    async showAll(){
        return await this.categoryRepository.find();
    }
}
