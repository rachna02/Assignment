import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from '../Transacion';
import {Book} from '../book';
@Component({
  selector: 'app-librarian-issue-book',
  templateUrl: './librarian-issue-book.component.html',
  styleUrls: ['./librarian-issue-book.component.scss']
})
export class LibrarianIssueBookComponent implements OnInit {

  transactions:Transaction[];
  books:Book[];
  user_name:string;
  book=new Book();
  constructor(private router: Router,private api:ApiCommunicationService) { }
  ngOnInit() {
      this.user_name=localStorage.getItem('user_name');
      if(this.user_name==null)
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
logout():void{
  localStorage.removeItem('user_name');
  this.router.navigate(['librarian-login']);
}

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
          book.book_cover=book.book_cover;
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
