import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
<<<<<<< Updated upstream
=======
import { AuthServiceService } from '../services/auth-service.service';
>>>>>>> Stashed changes


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

<<<<<<< Updated upstream
  constructor(private formBuilder: FormBuilder) { }
=======
  constructor(private formBuilder: FormBuilder, private AuthServiceService : AuthServiceService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }
<<<<<<< Updated upstream
=======

  isSuccessful = false;
  isLoginFailed = false;
  errorMessage = '';
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
        console.log(user_login, user_mdp);
=======
        this.AuthServiceService.loginUser(user_login, user_mdp).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isLoginFailed =false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        )
>>>>>>> Stashed changes


  }
  resetUserForm(userForm: NgForm){
    this.submitted = false;
    this.registerForm.reset();
  }
}
