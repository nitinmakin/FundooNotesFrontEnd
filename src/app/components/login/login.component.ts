import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public snakeBar: MatSnackBar) {
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

    console.log(userData)
    this.userService.login(userData).subscribe((result: any) => {
      this.snakeBar.open("login successfull.", 'cancel')
      console.log(result)
    },
      (error) => {
        console.log(error)
        this.snakeBar.open("login unsuccessfully.", 'cancel')
      })

    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}
