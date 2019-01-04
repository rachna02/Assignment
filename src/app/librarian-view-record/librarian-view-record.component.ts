import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from 'src/models/transacion';
import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-view-record',
  templateUrl: './librarian-view-record.component.html',
  styleUrls: ['./librarian-view-record.component.scss']
})
export class LibrarianViewRecordComponent implements OnInit {
  transactions:Transaction[];
  userName:string;
  constructor(private api:ApiCommunicationService,private router: Router) { }
  /**
   * It is used to get the username of the logged-in user
   * if the user is not logged in he will be redirected to the log-in 
   * page
   * It also gets all the transactions of students issuing books
   */
  ngOnInit() {
    this.userName=localStorage.getItem('userName');
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
}
