import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
    public showPassword: boolean = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }); 
  }
  login(){
    if(this.loginForm.valid){

      console.log(this.loginForm.value);
      //calling api in this palce
    }else{
      console.log("form is not valid please, fill the form correctly");
      return;
    }
  }
  public checkboxPassword(): void {
  this.showPassword = !this.showPassword;
  }
}
