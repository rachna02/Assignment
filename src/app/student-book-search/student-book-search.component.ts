import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import {Router} from '@angular/router';
import {Book} from 'src/models/book';
@Component({
  selector: 'app-student-book-search',
  templateUrl: './student-book-search.component.html',
  styleUrls: ['./student-book-search.component.scss']
})
export class StudentBookSearchComponent implements OnInit {
  page: number = 1;
  name:string;
  id:string;
  showAllBooks:boolean=false;
  bookNotAvailable:boolean=false;
  bookAvailable:boolean=false;
  noCopiesAvaiable:boolean=false;
  book1=new Book();
  searchedBooks:Book[]=new Array(10);
  sampleBook=new Book();
  index:number;
  indexArray: number[]=[];
  constructor(private router: Router,private api:ApiCommunicationService) {}
  books:Book[];
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   * It also gets the information about all the books available in 
   * the library
   */
  ngOnInit() {   
    this.name=localStorage.getItem('name');
    if(this.name==null)
    this.router.navigate(['']);
    this.api.getBooks().then(
      book => {
        this.noCopiesAvaiable=false;
        this.bookNotAvailable=false;
        this.bookAvailable=false;
        this.showAllBooks=true;
        this.books=book;
      },
      err=>{
        console.log(err);
      }
    );
  }
  /**
   * Used by the student to log out from the application
   */
  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }
  /**
   * It is used to search a book by providing the book name
   * @param id The book name of the book
   */
  submit(id:string):void
  {  
    this.bookAvailable=false;
    this.bookNotAvailable=false;
    this.showAllBooks=true;
    for (let book of this.books) {
      if(!book.id.toLowerCase().includes(id.toLowerCase()))
      {
        this.bookAvailable=false;
        this.bookNotAvailable=false;
        this.showAllBooks=true;
      }
      else
      {
        this.index = this.books.indexOf(book);
        this.indexArray.push(this.index);
        this.showAllBooks=false;
        this.bookNotAvailable=false;
        this.bookAvailable=true;
      }       
    }
     this.showAllBooks=false;
     this.bookNotAvailable=false;
     this.bookAvailable=true;
     if(this.indexArray.length==0)
     {
        this.showAllBooks=false;
        this.bookAvailable=false;
        this.bookNotAvailable=true;
     }
    } 
  }


