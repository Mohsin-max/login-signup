import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router:Router){}

  allUsers: any;

  UsersData: any = {
    username: '',
    email: '',
    password: ''
  }

  message: string = ""

  onSignup() {

    this.allUsers = JSON.parse(localStorage.getItem('users') || '[]');

    setTimeout(() => {
      this.message = ""
    }, 4000);

    if (this.UsersData.username && this.UsersData.email && this.UsersData.password) {

      this.allUsers.push(this.UsersData)
      localStorage.setItem("users", JSON.stringify(this.allUsers))

      this.message = "User Added Succesfully"

      this.UsersData = {
        username: '',
        email: '',
        password: ''
      }

      setTimeout(() => {
        this.router.navigate(['/login'])

      }, 4000);

    } else {

      this.message = "All Fields Required"

    }


  }

}
