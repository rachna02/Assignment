import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
import {Book} from 'src/models/book';
import { Transaction } from 'src/models/transacion';
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
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
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
  /**
   * Used by the student to log out from the application
   */
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
  /**
   * It is used to post the transaction of the book to be issued by
   * the student
   * @param book The book name of book to be issued
   * @param issueDate Issue date of book to be issued
   * @param returnDate Return date of book to be issued
   */
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
      this.api.postTransaction(this.transaction).subscribe(
      transaction => {
      this.cannotIssueBook=false;
      this.enterAllInformation=false;
      this.requestPlacedSuccessfully=true;
        },
      err => {
        this.enterAllInformation=false;
        this.requestPlacedSuccessfully=false;
        this.cannotIssueBook=true;
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
