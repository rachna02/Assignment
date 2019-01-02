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

  ngOnInit() {
    this.name=localStorage.getItem('name');
    if(this.name==null)
    this.router.navigate(['']);
  }

  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

}
