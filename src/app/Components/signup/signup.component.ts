import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      service: ['advance', Validators.required]
    });
  }
  Next() {
    if (this.registerForm.valid) {
      let reqdata = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: this.registerForm.value.service
      }
      console.log(this.registerForm.value);
      //calling api in this palce
      this.userService.Signup(reqdata).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    } else {
      console.log("form is not valid please, fill the form correctly");
      return;
    }
  }

  public checkboxPassword(): void {
    this.showPassword = !this.showPassword;
  }
}


