import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Student} from '../student';
import {ApiCommunicationService} from '../api-communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-librarian-add-student',
  templateUrl: './librarian-add-student.component.html',
  styleUrls: ['./librarian-add-student.component.scss']
})
export class LibrarianAddStudentComponent implements OnInit {

  myForm: FormGroup;
  student1 = new Student(); 
  student2 = new Student(); 
  isvalid:boolean;
  url:ArrayBuffer;
  s:string;
  studentAddedSuccessfully:boolean=false;
  user_name:string;
  constructor(private fb: FormBuilder,private router: Router,private api:ApiCommunicationService) {}

  ngOnInit() {
   this.myForm = this.fb.group({
     id: ['', Validators.required],
     name: ['', Validators.required],
     password: ['', Validators.required]
     });
     this.user_name=localStorage.getItem('user_name');
    if(this.user_name==null)
     this.router.navigate(['']);
  }

  logout():void{
    localStorage.removeItem('user_name');
    this.router.navigate(['librarian-login']);
  }

  submit(studentName:string,userName:string,password:string):void
  { 
    this.student1.id=this.myForm.get('id').value;
    this.student1.name=this.myForm.get('name').value;
    this.student1.password=this.myForm.get('password').value;
    this.api.postStudent(this.student1).then(
        student => {
          console.log(student);
          this.studentAddedSuccessfully=true;
         
        },
        err => {
          console.log(err);
        }
     );
    //this.router.navigate(["librarian-home"]);
  }
}
