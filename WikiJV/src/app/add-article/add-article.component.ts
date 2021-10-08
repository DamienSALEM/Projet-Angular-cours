import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  defaultCategorie = 'Pas de categorie';

  // private listArcticles = [
  //   {
  //     id: 0,
  //     title: "Uncharted",
  //     description: "jeu d'action",
  //     resume: "tres bon jeu blablabla",
  //     categorie: "action"
  //   }
  // ]

  // addArticle(title: string, description: string, resume: string, categorie: string) {
  //   var articles = {
  //     id: 0,
  //     title: "",
  //     description: "",
  //     resume: "",
  //     categorie: ""
  //   };
  //   articles.title = title;
  //   articles.description = description;
  //   articles.resume = resume;
  //   articles.categorie = categorie;
  //   articles.id = this.listArcticles[(this.listArcticles.length - 1)].id + 1;
  //   this.listArcticles.push(articles);
  // }

  // private articlesService: ArticleService

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    var title = form.value['title'];
    var description = form.value['description'];
    var resume = form.value['resume'];
    var categorie = form.value['categorie'];
    this.articleService.addArticle(title, description, resume, categorie);
    //this.addArticle(title, description, resume, categorie);
    //console.log(this.listArcticles);
    this.router.navigate(['/articles']);
  }
}
