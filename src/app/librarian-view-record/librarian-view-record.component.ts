import { Component, OnInit } from '@angular/core';
import {ApiCommunicationService} from '../api-communication.service';
import { Transaction } from '../Transacion';
import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-view-record',
  templateUrl: './librarian-view-record.component.html',
  styleUrls: ['./librarian-view-record.component.scss']
})
export class LibrarianViewRecordComponent implements OnInit {
  transactions:Transaction[];
  user_name:string;
  constructor(private api:ApiCommunicationService,private router: Router) { }

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
}
