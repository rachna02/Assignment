import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
import {Book} from '../book';
import { Transaction } from '../Transacion';

@Component({
  selector: 'app-student-issue-book',
  templateUrl: './student-issue-book.component.html',
  styleUrls: ['./student-issue-book.component.scss']
})
export class StudentIssueBookComponent implements OnInit {

  constructor(private router: Router,private api:ApiCommunicationService) { }

  id:string;
  book:string;
  issueDate:string;
  returnDate:string;
  isIssued:boolean;
  transaction=new Transaction();
  cannotIssueBook:boolean=false;
  books:Book[];
  name:string;
  enterAllInformation:boolean=false;
  requestPlacedSuccessfully:boolean=false;
  minDate = new Date();
 
  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.id=localStorage.getItem('id');
    if(this.name==null)
    this.router.navigate(['']);
    this.api.getBooks().then(
        book => {
        this.books=book;
        console.log(this.books);
   },
   err => {
     console.log(err);
    })
  }
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

  

  submit(book:string,issueDate:string,returnDate:string):void
  {
    this.isIssued=false;
    this.issueDate=issueDate;
    this.returnDate=returnDate;
    if(this.returnDate&&this.issueDate&&this.book)
    {
        this.transaction.id=this.id;
        this.transaction.name=this.name;
        this.transaction.book=this.book;
        this.transaction.isIssued=this.isIssued;
        this.transaction.issueDate=this.issueDate;
        this.transaction.returnDate=this.returnDate;
        console.log(this.transaction);
        this.api.postTransaction(this.transaction).subscribe(
          transaction => {
        console.log(transaction);
        this.cannotIssueBook=false;
        this.enterAllInformation=false;
        this.requestPlacedSuccessfully=true;
        //this.router.navigate(['student-home']);
        },
        err => {
            console.log(err);
            this.enterAllInformation=false;
            this.requestPlacedSuccessfully=false;
            this.cannotIssueBook=true;
            console.log(this.cannotIssueBook);
        }
      );
  }
      else
      {
        this.requestPlacedSuccessfully=false;
        this.cannotIssueBook=false;
        this.enterAllInformation=true;
      }
  }
}
