import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentChangePasswordComponent } from './student-change-password.component';
import { StudentChangePasswordChildComponent } from '../student-change-password-child/student-change-password-child.component';
describe('StudentChangePasswordComponent', () => {
  let component: StudentChangePasswordComponent;
  let fixture: ComponentFixture<StudentChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChangePasswordComponent,StudentChangePasswordChildComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
