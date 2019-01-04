import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.scss']
})
export class StudentChangePasswordComponent implements OnInit {
  id:string;
  name:string;
  passwordChangedSuccessfully:boolean=false;
  constructor(private router: Router) { }
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.name=localStorage.getItem('name');
    if(this.name==null)
      this.router.navigate(['']);
  }
  /**
   * Used to check if the password of the student has successfully
   * been changed 
   * @param $event The event emitted passed by 
   * student-change-password-child component
   */
  receiveMessage($event) {
    this.passwordChangedSuccessfully = $event
  }
  /**
   * Used by the student to log out from the application
   */
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
}
