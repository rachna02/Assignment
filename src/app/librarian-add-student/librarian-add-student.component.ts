import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Student} from 'src/models/student';
import {ApiCommunicationService} from '../api-communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-librarian-add-student',
  templateUrl: './librarian-add-student.component.html',
  styleUrls: ['./librarian-add-student.component.scss']
})
export class LibrarianAddStudentComponent implements OnInit {

  myForm: FormGroup;
  student = new Student();  
  isvalid:boolean;
  url:ArrayBuffer;
  s:string;
  studentAddedSuccessfully:boolean=false;
  userName:string;
  constructor(private fb: FormBuilder,private router: Router,private api:ApiCommunicationService) {}
  /**
   * It is used to validate the information filled in the form
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
  ngOnInit() {
   this.myForm = this.fb.group({
     id: ['', Validators.required],
     name: ['', Validators.required],
     password: ['', Validators.required]
     });
     this.userName=localStorage.getItem('userName');
    if(this.userName==null)
     this.router.navigate(['']);
  }
  /**
   * Used by the librarian to log out from the application
   */
  logout():void{
    localStorage.removeItem('userName');
    this.router.navigate(['librarian-login']);
  }
  /**
  * Used to post the student information collected in the form 
  * to the server
  */
  submit():void
  { 
    this.student.id=this.myForm.get('id').value;
    this.student.name=this.myForm.get('name').value;
    this.student.password=this.myForm.get('password').value;
    this.api.postStudent(this.student).then(
        student => {
          console.log(student);
          this.studentAddedSuccessfully=true;    
        },
        err => {
          console.log(err);
        }
     );
  }
}
