import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Book} from './book';
import { Student } from './student';
import { Transaction } from './Transacion';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  private urlBook='http://localhost:3004/books/';
  private urlStudent='http://localhost:3004/students/';
  private urlTransaction='http://localhost:3004/transactions/';
 
  private specificStudentUrl;
  private specificBookUrl;
  private specificTransactionUrl;
  constructor(private http: HttpClient) { }
  public postBooks(book:Book): Observable<Book>{
    return this.http.post<Book>(this.urlBook, book);
  }

  public postTransaction(transaction:Transaction):Observable<Transaction>{
      return this.http.post<Transaction>(this.urlTransaction,transaction)
  }

  public postBooks1(book:Book): Promise<Book>{
    return this.http.post<Book>(this.urlBook, book).toPromise(); 
  }

  public postStudent(student:Student): Promise<Student>{
      return this.http.post<Student>(this.urlStudent, student).toPromise();
  }

  public getStudent(id:string): Observable<Student>
  {
    this.specificStudentUrl=this.urlStudent+id;
    return this.http.get<Student>(this.specificStudentUrl);
  }

  public getBook(id:string):Promise<Book>
  {
    this.specificBookUrl=this.urlBook+id;
    return this.http.get<Book>(this.specificBookUrl).toPromise();
  }

  public getBooks():Promise<Book[]>
  { 
    return this.http.get<Book[]>(this.urlBook).toPromise();
  }

  public getTransactions():Promise<Transaction[]>
  {
    return this.http.get<Transaction[]>(this.urlTransaction).toPromise();
  }

  public getTransaction(id:string):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+id;
    return this.http.get<Transaction>(this.specificTransactionUrl).toPromise();
  }

  public updateTransaction(transaction:Transaction ):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+transaction.id;
    return this.http.put<Transaction>(this.specificTransactionUrl,transaction).toPromise();
  }

  public updateBook(book:Book):Promise<Book>
  {
    this.specificBookUrl=this.urlBook+book.id;
    return this.http.put<Book>(this.specificBookUrl,book).toPromise();
  }

  public updateStudent(student:Student):Promise<Student>
  {
    this.specificStudentUrl=this.urlStudent+student.id;
    return this.http.put<Student>(this.specificStudentUrl,student).toPromise();
  }

  public deleteTransaction(id:string):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+id;
    return this.http.delete<Transaction>(this.specificTransactionUrl).toPromise();
  } 
}
