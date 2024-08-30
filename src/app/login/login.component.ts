import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){}

  checkUser: any;

  userObj: any = {
    username: '',
    password: ''
  }

  message: string = ''

  onLogin() {

   if (this.userObj.username && this.userObj.password) {
    
    this.checkUser = JSON.parse(localStorage.getItem('users') || '[]')

    const selectedUser = this.checkUser.find((u: { username: any; password: any; }) => u.username === this.userObj.username && u.password === this.userObj.password);


    if (selectedUser != undefined) {

      this.message = "User Login Succesfully";
      localStorage.setItem('loggedInUser', JSON.stringify(selectedUser));
      // this.router.navigate([''])
      setTimeout(() => {
        this.router.navigate([''])
      }, 3000);
      
    } else {
      this.message="User Invalid"
      setTimeout(() => {
        this.message=""
        
      }, 4000);
    }
    

   } else {

     this.message="all Fields Required"
     setTimeout(() => {
       
       this.message=""
    }, 4000);
    
   }

  }


}
