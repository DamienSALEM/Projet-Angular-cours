import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: "Accueil", linkUrl: "home"},
    {linkId: 2, linkName: "A propos", linkUrl: "about"},
    {linkId: 3, linkName: "Contact", linkUrl: "contacts"},

    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
