import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Book} from 'src/models/book';
import {ApiCommunicationService} from '../api-communication.service';
@Component({
  selector: 'app-librarian-add-book',
  templateUrl: './librarian-add-book.component.html',
  styleUrls: ['./librarian-add-book.component.scss'],
  providers:[ApiCommunicationService]
})
export class LibrarianAddBookComponent implements OnInit {
  book = new Book(); 
  id:string;
  bookName:string;
  author: string;
  bookCover:any;
  isValid:boolean;
  url:ArrayBuffer;
  file:File;
  imageShow: any= '';
  copies:number;
  bookAddedSuccessfully:boolean=false;
  constructor(private router: Router,private api:ApiCommunicationService) { }
  userName:string;
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   */
  ngOnInit() {
    this.userName=localStorage.getItem('userName');
     if(this.userName==null)
     this.router.navigate(['']);
  }
  /**
   * Used by the librarian to log out from the application
   */
  logout():void{
    localStorage.removeItem('userName');
    this.router.navigate(['librarian-login']);
  }
  /**
   * It is used to convert the image into its base64 Format
   * @param event User action of pushing the button 'Choose File'
   */
  onFileChanged(event) {
    this.file = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
    this.imageShow = (<FileReader>event.target).result;
 }
}
  /**
   * It is used to post the data collected from the form to the server
   * @param data Data collected from the form
   */
  submit(data):void
  {
    this.isValid=false;
    this.id=data.id;
    this.author=data.author;
    this.bookCover=data.bookCover;
    this.copies=data.copies;
    if(this.author.length>0 && this.id.length>0 && this.copies)
    {
      console.log(this.author);
      this.isValid=true;
    }
    else
    {
      this.isValid=false;
    }
    if(this.isValid==true)
    {
      this.book.id= this.id; 
      this.book.author=this.author;
      this.book.bookCover=this.imageShow;
      this.book.copies=this.copies;
      this.api.postBooks(this.book).subscribe(
      book => {  
        this.bookAddedSuccessfully=true;  
      },
      err => {
        console.log(err);
      }
      );
    }
  }
}
