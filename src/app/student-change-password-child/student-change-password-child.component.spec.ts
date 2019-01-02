import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentChangePasswordChildComponent } from './student-change-password-child.component';

describe('StudentChangePasswordChildComponent', () => {
  let component: StudentChangePasswordChildComponent;
  let fixture: ComponentFixture<StudentChangePasswordChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChangePasswordChildComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentChangePasswordChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
