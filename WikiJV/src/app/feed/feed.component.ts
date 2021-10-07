import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  articles= [
    {id: 1, title:'Titre 1', text: "Ceci est un texte 1"},
    {id: 2, title:'Titre 2', text: "Ceci est un texte 2"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
