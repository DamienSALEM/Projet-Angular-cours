import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(userForm:NgForm){
    console.log(userForm);
  }
  resetUserForm(userForm: NgForm){
    userForm.resetForm();
  }

}
