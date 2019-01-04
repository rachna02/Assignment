import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from 'src/models/transacion';
import { Book } from 'src/models/book';
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
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   * It also gets the transaction of the student for the book issued
   * by him/her
   */
  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.name=localStorage.getItem('name');
    if(this.name==null)
      this.router.navigate(['']);
    this.api.getTransaction(this.id).then(
      transaction => {
        this.transaction=transaction;
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
   * Used to delete the transaction when the student returns the 
   * book
   * @param transaction Transaction of the student issuing the book
   */
  submit(transaction:Transaction){
    this.api.getBook(transaction.book).then(
        book => {
          this.book=book;
          console.log(this.book);
          book.id=book.id;
          book.author=book.author;
          book.bookCover=book.bookCover;
          book.copies=book.copies+1;
          this.api.updateBook(book).then(
            book => {
            },
            err => {
              console.log(err);
            }
          );
          this.api.deleteTransaction(this.id).then(
            transaction => {
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
  /**
   * It is used to open a modal for returning book
   * @param template To show the contents of the modal
   */
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }
}



