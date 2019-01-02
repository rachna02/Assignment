import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../book';
import {ApiCommunicationService} from '../api-communication.service';
@Component({
  selector: 'app-librarian-add-book',
  templateUrl: './librarian-add-book.component.html',
  styleUrls: ['./librarian-add-book.component.scss'],
  providers:[ApiCommunicationService]
})
export class LibrarianAddBookComponent implements OnInit {

  book1 = new Book(); 
  id:string;
  book_name:string;
  author: string;
  book_cover:any;
  isvalid:boolean;
  url:ArrayBuffer;
  file:File;
  imageShow: any= '';
  copies:number;
  bookAddedSuccessfully:boolean=false;
  constructor(private router: Router,private api:ApiCommunicationService) { }
  user_name:string;
  ngOnInit() {
    this.user_name=localStorage.getItem('user_name');
     if(this.user_name==null)
     this.router.navigate(['']);
  }
  logout():void{
    localStorage.removeItem('user_name');
    this.router.navigate(['librarian-login']);
  }

onFileChanged(event) {
  this.file = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
  this.imageShow = (<FileReader>event.target).result;
 }
}
  submit(data):void
  {
    this.isvalid=false;
    this.id=data.id;
    this.author=data.author;
    this.book_cover=data.book_cover;
    this.copies=data.copies;
    if(this.author.length>0 && data.book_cover && data.id && data.copies)
    {
      this.isvalid=true;
    }
    else
    {
      this.isvalid=false;
    }
    if(this.isvalid==true)
    {
      this.book1.id= this.id; 
      this.book1.author=this.author;
      this.book1.book_cover=this.imageShow;
      this.book1.copies=this.copies;
      this.api.postBooks(this.book1).subscribe(
      book => {
        console.log(book);
        this.bookAddedSuccessfully=true;  
      },
      err => {
        console.log(err);
      }
      );
      //this.router.navigate(["librarian-home"]);
    }
    console.log(data);
  }
}
