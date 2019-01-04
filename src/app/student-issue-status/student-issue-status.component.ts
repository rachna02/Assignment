import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Book } from 'src/models/book';
import { Transaction } from 'src/models/transacion';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-issue-status',
  templateUrl: './student-issue-status.component.html',
  styleUrls: ['./student-issue-status.component.scss']
})
export class StudentIssueStatusComponent implements OnInit {
  id:string;
  name:string;
  noBookRequest:boolean;
  bookIssued:boolean;
  bookNotIssued:boolean;
  transaction=new Transaction();
  book=new Book();
  constructor(private api:ApiCommunicationService,private router: Router) { }
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   * It also gets the transaction of the student for the book issued
   * by him/her
   */
  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.id=localStorage.getItem('id');
    if(this.name==null)
    this.router.navigate(['']);
    this.api.getTransaction(this.id).then(
    transaction => {
      this.transaction=transaction;
      if(transaction.isIssued)
      {
        this.bookIssued=true;
      }
      else{
        this.bookNotIssued=true;
      }
    },
    err => {
      console.log(err);
    })
  }
  /**
   * Used by the student to log out from the application
   */
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
}


