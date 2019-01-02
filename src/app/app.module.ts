import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LibrarianLoginFormComponent } from './librarian-login-form/librarian-login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentLoginFormComponent } from './student-login-form/student-login-form.component';
import { LibrarianHomeComponent } from './librarian-home/librarian-home.component';
import { LibrarianAddBookComponent } from './librarian-add-book/librarian-add-book.component';
import { LibrarianAddStudentComponent } from './librarian-add-student/librarian-add-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentBookSearchComponent } from './student-book-search/student-book-search.component';
import { StudentIssueBookComponent } from './student-issue-book/student-issue-book.component';
import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibrarianIssueBookComponent } from './librarian-issue-book/librarian-issue-book.component';
import { StudentIssueStatusComponent } from './student-issue-status/student-issue-status.component';
import { StudentReturnBookComponent } from './student-return-book/student-return-book.component';
import { LibrarianViewRecordComponent } from './librarian-view-record/librarian-view-record.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StudentChangePasswordComponent } from './student-change-password/student-change-password.component';
import { StudentChangePasswordChildComponent } from './student-change-password-child/student-change-password-child.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
@NgModule({
  declarations: [
    AppComponent,
    LibrarianLoginFormComponent,
    StudentLoginFormComponent,
    LibrarianHomeComponent,
    LibrarianAddBookComponent,
    LibrarianAddStudentComponent,
    StudentHomeComponent,
    StudentBookSearchComponent,
    StudentIssueBookComponent,
    LibrarianIssueBookComponent,
    StudentIssueStatusComponent,
    StudentReturnBookComponent,
    LibrarianViewRecordComponent,
    StudentChangePasswordComponent,
    StudentChangePasswordChildComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}