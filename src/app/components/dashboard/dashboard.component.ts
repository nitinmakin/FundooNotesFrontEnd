import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  showFiller = false;
  isButtonVisible = true;
  token = localStorage.getItem('token')
  name = localStorage.getItem('name')
  email = localStorage.getItem('email')
  constructor(private userService: UserServiceService, public snackBar: MatSnackBar, public route: Router) { }

  ngOnInit(): void {
  }

  logout() {
  
    this.userService.removeToken();
    this.route.navigate(['login'])
       this.snackBar.open("logout successfully.", 'cancel')
       setTimeout(() => {
        this.snackBar.dismiss();
      }, 5000)
      
      
  }

  changeVisiblity() {
    return this.isButtonVisible = !this.isButtonVisible
  }

  checkVisiblity() {
    return this.isButtonVisible
  }

}

