import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
  });
  }
  create(){
    if(this.registerForm.valid){

      console.log(this.registerForm.value);
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


