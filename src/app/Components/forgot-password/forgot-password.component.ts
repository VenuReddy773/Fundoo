import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,route:Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]]
  }); 
}
submit(){
  if(this.forgotForm.valid){

    console.log(this.forgotForm.value);
    //calling api in this palce
  }
  else{
    console.log("form is not valid please, fill the form correctly");
    return;
  }
}
}

