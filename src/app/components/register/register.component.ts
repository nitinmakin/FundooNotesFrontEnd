import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/user-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServiceService) {
    this.form = this.fb.group({

      FirstName: ["", Validators.pattern('[a-zA-Z]{2,}')],

      LastName: ["", Validators.pattern('[a-zA-Z]{2,}')],

      Email: ["", Validators.email],

      Password: ["", Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],

      Conform: [""]

    })
  }

  onubmit() {
    let userData = {
      "firstName": this.form.controls.FirstName.value,
      "lastName": this.form.controls.LastName.value,
      "phoneNo": "9087654321",
      "email": this.form.controls.Email.value,
      "password": this.form.controls.Conform.value,
    }
    
    console.log(userData)
    this.userService.register(userData).subscribe((result: any) => {
      console.log(result)
    },
      (error) => {
        console.log(error)
      })

    console.log(this.form.value)
  }

  ngOnInit(): void {
  }
}

