import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-login-form',
  templateUrl: './librarian-login-form.component.html',
  styleUrls: ['./librarian-login-form.component.scss']
})
export class LibrarianLoginFormComponent implements OnInit {

  constructor(private router: Router,private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

user_name:string;
password:string;
incorectCredentials:boolean=false;
  ngOnInit() {
  }
  switchLanguage(language: string) {
    this.incorectCredentials=false;
    this.translate.use(language);
  }

  login(data) : void {
    if(data.user_name == 'anuradha' && data.password == 'anuradha'){
      localStorage.setItem('user_name',this.user_name);
      this.router.navigate(["librarian-home"]);
    }else {
      this.incorectCredentials=true;
    }
  }
}
