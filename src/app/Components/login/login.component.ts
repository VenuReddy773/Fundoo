import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
    public showPassword: boolean = false;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    }); 
  }
  login(){
    if(this.loginForm.valid){
      let reqdata={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      console.log(this.loginForm.value);
      //calling api in this palce
      this.userService.login(reqdata).subscribe((response:any)=>{
        localStorage.setItem("token",response.id);
        console.log("login",response);
      },error =>{
        console.log(error);
      })          
    }
    else{
      console.log("form is not valid please, fill the form correctly");
      return;
    }
  }
  public checkboxPassword(): void {
  this.showPassword = !this.showPassword;
  }
}
