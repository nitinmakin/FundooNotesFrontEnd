import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from "../../Services/user-service.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  form: FormGroup;

  


  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public snakeBar: MatSnackBar) { 
    this.form = this.fb.group({
      Email: ["", Validators.email],
    })
  }

  LoadData() {
    let userData = {
      "email": this.form.controls.Email.value,
    }

    console.log(userData)
    this.userService.forgetPassword(userData).subscribe((result: any) => {
      this.snakeBar.open("link of reset password has send to your email successfully.", 'cancel')
      console.log(result)
    },
      (error) => {
        console.log(error)
        this.snakeBar.open("enter valid email", 'cancel')
      })

    console.log(this.form.value)
  }


  ngOnInit(): void {
  }

}
