import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LibrarianAddStudentComponent } from './librarian-add-student.component';

describe('LibrarianAddStudentComponent', () => {
  let component: LibrarianAddStudentComponent;
  let fixture: ComponentFixture<LibrarianAddStudentComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianAddStudentComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  it('id field validity', () => {
    let id = component.myForm.controls['id']; 
    expect(id.valid).toBeFalsy(); 
  });

  it('name field validity', () => {
    let name = component.myForm.controls['name']; 
    expect(name.valid).toBeFalsy(); 
  });

  it('password field validity', () => {
    let password = component.myForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
  });

  it('id field empty', () => {
    let errors = {};
    let id = component.myForm.controls['id'];
    errors = id.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
  it('name field empty', () => {
    let errors = {};
    let name = component.myForm.controls['name'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('password field empty', () => {
    let errors = {};
    let password = component.myForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });




 
  
});
