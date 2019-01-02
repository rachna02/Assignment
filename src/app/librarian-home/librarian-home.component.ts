import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-home',
  templateUrl: './librarian-home.component.html',
  styleUrls: ['./librarian-home.component.scss']
})
export class LibrarianHomeComponent implements OnInit {
  
  constructor(private router: Router) { }
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

}
