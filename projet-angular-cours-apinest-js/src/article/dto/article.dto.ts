import { Users } from "src/user/entity/user.entity";

export class ArticleDto {
    Title: string;
    Resume: string;
    Text: string;
    date_post: Date;
    Image?: string;
    Users: Users;
  }