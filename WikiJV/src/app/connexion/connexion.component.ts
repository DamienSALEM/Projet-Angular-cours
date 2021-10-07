import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
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
        var user_login = this.registerForm.value['email'];
        var user_mdp = this.registerForm.value['mdp'];

        console.log(user_login, user_mdp);


  }
  resetUserForm(userForm: NgForm){
    this.submitted = false;
    this.registerForm.reset();
  }
}
