import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    localStorage.clear();
  }

  //login function accessing the dashboard
  buttonClicked(){
    if(this.username === ""){
      alert("Username field is empty. Please fill in field");
    } else {
      localStorage.setItem("username", this.username);
      this.router.navigateByUrl('/dashboard');
    }
  }
}
