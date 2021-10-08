import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})


export class FeedComponent implements OnInit {

  items= [
    {id: 1, title:'Titre 1', text: "Ceci est un texte 1", catégorie: "cat1"},
    {id: 2, title:'Titre 2', text: "Ceci est un texte 2", catégorie: "cat2"}
  ]
  
  ShowArticle(){
      this.router.navigateByUrl('/article');
    
  }
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

}

