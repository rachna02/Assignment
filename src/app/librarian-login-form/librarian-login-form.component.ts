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
userName:string;
password:string;
incorectCredentials:boolean=false;
  ngOnInit() {
  }
  /**
   * It is used to swtch the language from English to Chinese
   * and vis -a -vis
   * @param language The language preferred by the librarian
   */
  switchLanguage(language: string) {
    this.incorectCredentials=false;
    this.translate.use(language);
  }
  /**
   * It is used to log-in the application by the librarian
   * @param data The credentials passed by the librarian while 
   * logging in
   */
  login(data) : void {
    if(data.userName == 'anuradha' && data.password == 'anuradha'){
      localStorage.setItem('userName',this.userName);
      this.router.navigate(["librarian-home"]);
    }else {
      this.incorectCredentials=true;
    }
  }
}
