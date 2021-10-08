import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() titleA: string = "";
  @Input() description: string = "";
  @Input() resume: string = "";
  @Input() categorie: string = "";
  @Input() indexArticle: number = 0;
  @Input() id: number = 1;

  constructor(private articleServie: ArticleService) { }

  ngOnInit(): void {
  }

  OnDelete() {
    this.articleServie.delete(this.indexArticle);
  }

}
