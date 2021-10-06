import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirm-validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('',Validators.required);
  surname = new FormControl ('',Validators.required);
  nickname = new FormControl ('',Validators.required);
  email = new FormControl ('',[Validators.required, Validators.email])
  phone = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  mdp = new FormControl ('', Validators.required);
  confirmMdp = new FormControl ('', Validators.required);
  


  onFormSubmit(userForm:NgForm){
    console.log(
      this.name.value,
      this.surname.value,
      this.nickname.value,
      this.phone.value,
      this.mdp.value,
      this.confirmMdp.value
    )
  }
  resetUserForm(userForm: NgForm){
    userForm.resetForm();
  }

}
