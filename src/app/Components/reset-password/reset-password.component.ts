import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    token:any;

  constructor(private formBuilder:FormBuilder, private userService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetForm = this.formBuilder.group({
      NewPassword:['',[Validators.required,Validators.minLength(8)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(8)]]
    }); 
  }
  submit(){
    if(this.resetForm.valid){
      let reqdata={
        newPassword:this.resetForm.value.NewPassword
      }
      console.log(this.resetForm.value);
      //calling api in this palce
      this.userService.resetPassword(reqdata,this.token).subscribe((response:any)=>{
        console.log("reset called",response);
      },error =>{
        console.log(error);
      })          
    }else{
      console.log("form is not valid please, fill the form correctly");
      return;
    }
  }
  public checkboxPassword(): void {
  this.showPassword = !this.showPassword;
  }

}
