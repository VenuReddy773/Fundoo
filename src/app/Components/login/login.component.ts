import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/authguard.service';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user='1';
  public showPassword: boolean = false;
  constructor(private formBuilder:FormBuilder, private userService:UserService,private router:Router) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
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
      this.userService.login(reqdata).subscribe((response:any) => {
        console.log(response);
        localStorage.setItem("token",response.id) 
        localStorage.setItem("SessionUser",this.user)
        this.router.navigate(["/dashboard"]); 
             
      }, error => {
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
