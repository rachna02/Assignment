import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
@Component({
  selector: 'app-student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.scss']
})
export class StudentLoginFormComponent implements OnInit {
  constructor(private router: Router,private api:ApiCommunicationService) { }
  id:string;
  password:string;
  invalidCredentials:boolean=false;
  ngOnInit() {
  }
  login() : void {
    this.api.getStudent(this.id).subscribe(
    stu => {
      if(stu.password==this.password)
      {
        console.log(stu.name);
        localStorage.setItem('name',stu.name);
        localStorage.setItem('id',stu.id);
        this.router.navigate(["student-home"]);
      }
      else
      {
        this.invalidCredentials=true;  
      }   
  },
  err => {
    console.log(err);
    this.invalidCredentials = true;
  }
  );   
  }
}
