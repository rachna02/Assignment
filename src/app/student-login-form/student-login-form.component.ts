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
  /**
   * It is used to log-in to the application by the student
   */
  login() : void {
    this.api.getStudent(this.id).subscribe(
      student => {
        if(student.password==this.password)
        {
          localStorage.setItem('name',student.name);
          localStorage.setItem('id',student.id);
          this.router.navigate(["student-home"]);
        }
        else
        {
          this.invalidCredentials=true;  
        }   
      },
      err => {
        this.invalidCredentials = true;
      }
    );   
  }
}
