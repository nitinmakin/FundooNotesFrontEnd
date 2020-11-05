import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    public snakeBar: MatSnackBar) {
    this.form = this.fb.group({
      Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      Conform: [""]
    })
  }

  LoadData() {
    let userData = {  
      "password": this.form.controls.Conform.value,
    }

    console.log(userData)
    this.userService.resetPassword(userData).subscribe((result: any) => {
      this.snakeBar.open("Password changed Successfully", 'cancel')
      console.log(result)
    },
      (error) => {
        this.snakeBar.open("OOPS..somethimg went wrong...", 'cancel')
        console.log(error)

      })

    console.log(this.form.value)
  }

  ngOnInit(): void {
  }

}
