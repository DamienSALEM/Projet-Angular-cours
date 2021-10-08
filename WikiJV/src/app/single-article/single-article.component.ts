import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  title: string = "test";
  description: string = "test";
  resume: string = "tes";
  categorie: string = "test";

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.articleService.getArticleById(+id)!.title;
    this.description = this.articleService.getArticleById(+id)!.description;
    this.resume = this.articleService.getArticleById(+id)!.resume;
    this.categorie = this.articleService.getArticleById(+id)!.categorie;
  }

}
