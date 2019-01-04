import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  name:string;
  constructor(private router: Router) { }
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
  ngOnInit() {
    this.name=localStorage.getItem('name');
    if(this.name==null)
    this.router.navigate(['']);
  }
   /**
   * Used by the student to log out from the application
   */
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
}
