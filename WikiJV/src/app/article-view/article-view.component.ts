import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  // @Input() titleA: string = "";
  // @Input() description: string = "";
  // @Input() resume: string = "";
  // @Input() categorie: string = "";

  // constructor() { }

  // ngOnInit(): void {
  // }

  // OnComment() {
  //   console.log("comment");
  // }

  title = 'WikiJV';

  listArticles: any[] = [];
  articleSubscription: Subscription = new Subscription();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.articleSubject.subscribe(
      (articles: any[]) => {
        this.listArticles = articles;
      }
    );
    this.articleService.emitArticleSubject();
  }
}
