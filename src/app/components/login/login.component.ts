import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilityServiceService } from "../../Services/utility-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public snakeBar: UtilityServiceService, private _route: Router) {
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
        this.snakeBar.snakeBarMethod("login successfull.")
     
        this.userService.setToken(result.data.token);
        console.log(result)
        this._route.navigate(['dashboard/notes'])
      },
        (error) => {
          console.log(error)
          this.snakeBar.snakeBarMethod("login unsuccessfully.")
        
        })
    }
    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}
