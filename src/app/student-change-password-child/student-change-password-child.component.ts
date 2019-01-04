import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-student-change-password-child',
  templateUrl: './student-change-password-child.component.html',
  styleUrls: ['./student-change-password-child.component.scss']
})
export class StudentChangePasswordChildComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Output() messageEvent = new EventEmitter<boolean>();
  passwordChangedSuccessfully:boolean;
  passwordOne:string;
  passwordSecond:string;
  passwordsNotMatching:boolean=false;
  student=new Student();
  constructor(private router: Router,private api:ApiCommunicationService) { }
   /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
  ngOnInit() {
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
  /**
   * Used to update the password of the student
   * @param passwordOne The password entered by the student
   * @param passwordSecond The password re-entered by the student
   */
  submit(passwordOne:string,passwordSecond:string)
  {
    this.passwordOne=passwordOne;
    this.passwordSecond=passwordSecond;
    if(this.passwordOne.length>=3 && this.passwordSecond.length>=3)
    {
      if(this.passwordOne==this.passwordSecond)
      {
        this.api.getStudent(this.id).subscribe(
          student => {
            this.student=student;
            student.id=student.id;
            student.name=student.name;
            student.password=this.passwordOne;
            this.api.updateStudent(student).then(
              student1 => {
             console.log(student1.password);
            },
           err => {
             console.log(err);
            }
          );
         },
         err => {
           console.log(err);
        }
      );
        this.passwordChangedSuccessfully=true;
        this.messageEvent.emit(this.passwordChangedSuccessfully);
      }
      else{     
        this.passwordsNotMatching=true;
      }
    }  
  }
}
