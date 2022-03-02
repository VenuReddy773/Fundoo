import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  submit() {
    if (this.forgotForm.valid) {
      let reqdata = {
        email: this.forgotForm.value.email
      }
      console.log(this.forgotForm.value);
      //calling api in this palce
      this.userService.forgotPassword(reqdata).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })

    }
    else {
      console.log("form is not valid please, fill the form correctly");
      return;
    }
  }
}

