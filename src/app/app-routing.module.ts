import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianLoginFormComponent }      from './librarian-login-form/librarian-login-form.component';
import { StudentLoginFormComponent }      from './student-login-form/student-login-form.component';
import {LibrarianHomeComponent} from './librarian-home/librarian-home.component';
import {LibrarianAddBookComponent} from './librarian-add-book/librarian-add-book.component';
import {LibrarianAddStudentComponent} from './librarian-add-student/librarian-add-student.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {StudentBookSearchComponent} from './student-book-search/student-book-search.component';
import {StudentIssueBookComponent} from './student-issue-book/student-issue-book.component';
import {LibrarianIssueBookComponent} from './librarian-issue-book/librarian-issue-book.component';
import {StudentIssueStatusComponent} from './student-issue-status/student-issue-status.component';
import {StudentReturnBookComponent} from './student-return-book/student-return-book.component';
import {LibrarianViewRecordComponent} from './librarian-view-record/librarian-view-record.component'
import {StudentChangePasswordComponent} from './student-change-password/student-change-password.component';
export const routes: Routes = [
  { path: '', redirectTo: '/librarian-login', pathMatch: 'full' },
  { path: 'librarian-login', component: LibrarianLoginFormComponent },
  { path: 'student-login', component: StudentLoginFormComponent },
  { path: 'librarian-home', component: LibrarianHomeComponent },
  {path: 'librarian-add-book', component: LibrarianAddBookComponent },
  {path:'librarian-add-student',component:LibrarianAddStudentComponent},
  {path:'student-home',component:StudentHomeComponent},
  {path:'student-book-search',component:StudentBookSearchComponent},
  {path:'student-issue-book',component:StudentIssueBookComponent},
  {path:'librarian-issue-book',component:LibrarianIssueBookComponent},
  {path:'student-issue-status',component:StudentIssueStatusComponent},
  {path:'student-return-book',component:StudentReturnBookComponent},
  {path:'librarian-view-record',component:LibrarianViewRecordComponent},
  {path:'student-change-password',component:StudentChangePasswordComponent}

];

@NgModule({
 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
