import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentBookSearchComponent } from './student-book-search.component';
import {NgxPaginationModule} from 'ngx-pagination';
describe('StudentBookSearchComponent', () => {
  let component: StudentBookSearchComponent;
  let fixture: ComponentFixture<StudentBookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBookSearchComponent ],
      imports: [FormsModule,HttpClientModule,RouterTestingModule,ReactiveFormsModule,NgxPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
