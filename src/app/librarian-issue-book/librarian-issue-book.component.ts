import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from 'src/models/transacion';
import {Book} from 'src/models/book';
@Component({
  selector: 'app-librarian-issue-book',
  templateUrl: './librarian-issue-book.component.html',
  styleUrls: ['./librarian-issue-book.component.scss']
})
export class LibrarianIssueBookComponent implements OnInit {

  transactions:Transaction[];
  books:Book[];
  userName:string;
  book=new Book();
  constructor(private router: Router,private api:ApiCommunicationService) { }
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   * It also gets the transactions from the server
   */
  ngOnInit() {
      this.userName=localStorage.getItem('user_name');
      if(this.userName==null)
      this.router.navigate(['']);
      this.api.getTransactions().then(
      transaction => {
      this.transactions=transaction;
    },
       err => {
         console.log(err);
      }
    );
}
  /**
   * Used by the librarian to log out from the application
   */
  logout():void{
    localStorage.removeItem('userName');
    this.router.navigate(['librarian-login']);
  }
  /**
   * It updates the transaction and book information when a student
   * issues a book 
   * @param transaction Transaction of the student issuing a book
   */
  submit(transaction:Transaction):void{
    this.api.getBook(transaction.book).then(
    book => {
    this.book=book;
    console.log(this.book);
        if(book.copies>0)
        {
          transaction.id=transaction.id;
          transaction.name=transaction.name;
          transaction.book=transaction.book;
          transaction.isIssued=true;
          transaction.issueDate=transaction.issueDate;
          transaction.returnDate=transaction.returnDate;
          this.api.updateTransaction(transaction).then(
          transaction1 => {
            console.log(transaction1);
          },
          err => {
            console.log(err);
          }
        );
          book.id=book.id;
          book.author=book.author;
          book.bookCover=book.bookCover;
          book.copies=book.copies-1;
          this.api.updateBook(book).then(
          book1 => {
            console.log(book1);  
          },
          err => {
          console.log(err);
          }
        );
      }
    },
    err => {
      console.log(err);
    }
  );
}
}
