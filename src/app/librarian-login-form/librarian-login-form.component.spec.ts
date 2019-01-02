import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TranslateModule} from '@ngx-translate/core';
import { LibrarianLoginFormComponent } from './librarian-login-form.component';

describe('LibrarianLoginFormComponent', () => {
  let component: LibrarianLoginFormComponent;
  let fixture: ComponentFixture<LibrarianLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianLoginFormComponent ],
      imports: [TranslateModule.forRoot(),FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  





});
