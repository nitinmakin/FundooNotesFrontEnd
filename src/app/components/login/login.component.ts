import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public snakeBar: MatSnackBar, private _route: Router) {
    this.form = this.fb.group({
      Email: ["", Validators.email],
      Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
    })
  }

  LoadData() {
    let userData = {
      "email": this.form.controls.Email.value,
      "password": this.form.controls.Password.value,
    }

    if (this.form.valid) {
      console.log(userData)
      this.userService.login(userData).subscribe((result: any) => {
        this.snakeBar.open("login successfull.", 'cancel')
        setTimeout(() => {
          this.snakeBar.dismiss();
        }, 5000)
        this.userService.setToken(result.data.token);
        console.log(result)
        this._route.navigate(['dashboard'])
      },
        (error) => {
          console.log(error)
          this.snakeBar.open("login unsuccessfully.", 'cancel')
          setTimeout(() => {
            this.snakeBar.dismiss();
          }, 5000)
        })
    }
    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}
