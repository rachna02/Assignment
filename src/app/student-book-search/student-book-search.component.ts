import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import {Router} from '@angular/router';
import {Book} from '../book';
@Component({
  selector: 'app-student-book-search',
  templateUrl: './student-book-search.component.html',
  styleUrls: ['./student-book-search.component.scss']
})
export class StudentBookSearchComponent implements OnInit {
  p: number = 1;
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

  logout():void{
    localStorage.removeItem('name');
    this.router.navigate(['student-login']);
  }

  submit(id:string):void
  {  
    this.bookAvailable=false;
    this.bookNotAvailable=false;
    this.showAllBooks=true;
    console.log(this.books);
    for (let book of this.books) {
      if(!book.id.toLowerCase().includes(id.toLowerCase()))
      {
        console.log(book);
      }
      else
      {
        this.index = this.books.indexOf(book);
        console.log(this.index+" "+book.id);
        this.indexArray.push(this.index);
      }       
    }
     console.log(this.indexArray.length);
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


