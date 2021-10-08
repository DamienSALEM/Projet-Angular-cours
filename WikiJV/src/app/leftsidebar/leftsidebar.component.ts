import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  categories= [
    {id: 1, name:'cat1'},
    {id: 2, name:'cat2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
}
