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

  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.name=localStorage.getItem('name');
    //  if(this.name==null)
    //  this.router.navigate(['student-login']);
    console.log(this.id+" "+this.name);
  }

  receiveMessage($event) {
   
    this.passwordChangedSuccessfully = $event
  }

  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

}
