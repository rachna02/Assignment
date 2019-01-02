import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentIssueBookComponent } from './student-issue-book.component';
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentIssueBookComponent', () => {
  let component: StudentIssueBookComponent;
  let fixture: ComponentFixture<StudentIssueBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIssueBookComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule,
        MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
