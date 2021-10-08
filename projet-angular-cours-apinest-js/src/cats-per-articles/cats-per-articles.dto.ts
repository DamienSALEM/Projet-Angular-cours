import { Article } from "src/article/entity/article.entity";
import { Category } from "src/category/Entity/category.entity";

export interface CatsperarticlesDTO{
    id:number;
    Article: Article;
    Categorie:Category;
}