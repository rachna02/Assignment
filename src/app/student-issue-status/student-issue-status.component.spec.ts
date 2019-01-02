import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentIssueStatusComponent } from './student-issue-status.component';

describe('StudentIssueStatusComponent', () => {
  let component: StudentIssueStatusComponent;
  let fixture: ComponentFixture<StudentIssueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIssueStatusComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
