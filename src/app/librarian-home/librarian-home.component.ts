import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-home',
  templateUrl: './librarian-home.component.html',
  styleUrls: ['./librarian-home.component.scss']
})
export class LibrarianHomeComponent implements OnInit {
  constructor(private router: Router) { }
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
}
