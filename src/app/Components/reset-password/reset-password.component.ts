import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;
    public showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      NewPassword:['',[Validators.required,Validators.minLength(8)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(8)]]
    }); 
  }
  submit(){
    if(this.resetForm.valid){

      console.log(this.resetForm.value);
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
