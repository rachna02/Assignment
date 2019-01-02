import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from '../Transacion';
import { Book } from '../book';
import {Router} from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';






@Component({
  selector: 'app-student-return-book',
  templateUrl: './student-return-book.component.html',
  styleUrls: ['./student-return-book.component.scss']
})
export class StudentReturnBookComponent implements OnInit {
  id:string;
  transaction=new Transaction();
  book=new Book();
  name:string;
  bookReturnedSuccessfully:boolean=false;

  modalRef: BsModalRef;
  constructor(private api:ApiCommunicationService,private router: Router,private modalService: BsModalService) { }

  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.name=localStorage.getItem('name');
      if(this.name==null)
      this.router.navigate(['']);
    this.api.getTransaction(this.id).then(
      transaction => {
        this.transaction=transaction;
       console.log(this.transaction);
   },
   err => {
     console.log(err);
  })

  }

  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

  submit(transaction:Transaction){

    this.api.getBook(transaction.book).then(
      book => {
        this.book=book;
        console.log(this.book);
        book.id=book.id;
        book.author=book.author;
        book.book_cover=book.book_cover;
        book.copies=book.copies+1;
        this.api.updateBook(book).then(
        book1 => {
       console.log(book1);
       
     },
     err => {
       console.log(err);
    }
  );

    this.api.deleteTransaction(this.id).then(
      transaction => {
       console.log(transaction);
       this.bookReturnedSuccessfully=true;
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

}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
}







}



