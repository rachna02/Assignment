import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LibrarianViewRecordComponent } from './librarian-view-record.component';

describe('LibrarianViewRecordComponent', () => {
  let component: LibrarianViewRecordComponent;
  let fixture: ComponentFixture<LibrarianViewRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianViewRecordComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianViewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
