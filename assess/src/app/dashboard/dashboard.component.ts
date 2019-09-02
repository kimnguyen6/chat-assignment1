import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string = localStorage.getItem('username');
  email: string = '';
  groups: [];
  title:string = 'Dashboard';

  isSuper: false;
  isGrpAd: false;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    console.log("Logged in as " + this.username);
  }

  // logout function takes user back to login page
  logOut() {
    this.router.navigateByUrl('/login');
  }
}
