import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import Validation from '../validation';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      mdp: ['', Validators.required],
      confirmMdp: ['', Validators.required]
  }, {
      validator: [Validation.match('mdp', 'confirmMdp')]
  });
  }
  

  get f() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        var user_name = this.registerForm.value['name'];
        var user_surname = this.registerForm.value['surname'];
        var user_nickname = this.registerForm.value['nickname'];
        var user_email = this.registerForm.value['email'];
        var user_phone = this.registerForm.value['phone'];
        var user_mdp = this.registerForm.value['mdp'];
        var user_confirmMdp = this.registerForm.value['confirmMdp'];

        console.log(user_name,user_surname, user_nickname, user_email, user_phone, user_mdp, user_confirmMdp);


  }
  resetUserForm(userForm: NgForm){
    this.submitted = false;
    this.registerForm.reset();
  }

}
