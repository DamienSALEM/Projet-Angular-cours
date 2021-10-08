import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/token-storage-service.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private AuthServiceService : AuthServiceService, private TokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }

  isSuccessful = false;
  isLoginFailed = false;
  errorMessage = '';
  get f() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        var user_login = this.registerForm.value['nickname'];
        var user_mdp = this.registerForm.value['mdp'];

        this.AuthServiceService.loginUser(user_login, user_mdp).subscribe(
          data => {
            console.log(data);
            this.TokenStorageService.saveToken(data);
            this.TokenStorageService.saveUser(user_login);
            this.isSuccessful = true;
            this.isLoginFailed =false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        )


  }
  resetUserForm(userForm: NgForm){
    this.submitted = false;
    this.registerForm.reset();
  }
}
