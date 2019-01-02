import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Book } from '../book';
import { Transaction } from '../Transacion';
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
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
}


