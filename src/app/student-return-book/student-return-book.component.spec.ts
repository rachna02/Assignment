import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentReturnBookComponent } from './student-return-book.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
describe('StudentReturnBookComponent', () => {
  let component: StudentReturnBookComponent;
  let fixture: ComponentFixture<StudentReturnBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReturnBookComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule, ModalModule.forRoot()],
      providers: [BsModalRef],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
