import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Book} from 'src/models/book';
import { Student } from 'src/models/student';
import { Transaction } from 'src/models/transacion';

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
  /**
   * Posts the book data to the server
   * @param book Book object
   */
  public postBooks(book:Book): Observable<Book>{
    return this.http.post<Book>(this.urlBook, book);
  }
  /**
   * Posts the transaction data to the server
   * @param transaction Transaction object
   */
  public postTransaction(transaction:Transaction):Observable<Transaction>{
      return this.http.post<Transaction>(this.urlTransaction,transaction)
  }
  /**
   * Posts the student data to the server
   * @param student Student object
   */
  public postStudent(student:Student): Promise<Student>{
      return this.http.post<Student>(this.urlStudent, student).toPromise();
  }
  /**
   * Gets the data about a student by id
   * @param id student id
   */
  public getStudent(id:string): Observable<Student>
  {
    this.specificStudentUrl=this.urlStudent+id;
    return this.http.get<Student>(this.specificStudentUrl);
  }
  /**
   * Gets the data about a book by its name
   * @param id book name
   */
  public getBook(id:string):Promise<Book>
  {
    this.specificBookUrl=this.urlBook+id;
    return this.http.get<Book>(this.specificBookUrl).toPromise();
  }
  /**
   * Gets the data of all the books in the library
   */
  public getBooks():Promise<Book[]>
  { 
    return this.http.get<Book[]>(this.urlBook).toPromise();
  }
  /**
   * Gets the data of all the transactions in the library
   */
  public getTransactions():Promise<Transaction[]>
  {
    return this.http.get<Transaction[]>(this.urlTransaction).toPromise();
  }
  /**
   * Gets the information of the book issued by a student
   * @param id student id
   */
  public getTransaction(id:string):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+id;
    return this.http.get<Transaction>(this.specificTransactionUrl).toPromise();
  }
  /**
   * Used to update transaction
   * @param transaction transaction object
   */
  public updateTransaction(transaction:Transaction ):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+transaction.id;
    return this.http.put<Transaction>(this.specificTransactionUrl,transaction).toPromise();
  }
  /**
   * Used to update any information regarding a book
   * @param book Book object
   */
  public updateBook(book:Book):Promise<Book>
  {
    this.specificBookUrl=this.urlBook+book.id;
    return this.http.put<Book>(this.specificBookUrl,book).toPromise();
  }
  /**
   * Used to update any information regarding a student
   * @param student Student object
   */
  public updateStudent(student:Student):Promise<Student>
  {
    this.specificStudentUrl=this.urlStudent+student.id;
    return this.http.put<Student>(this.specificStudentUrl,student).toPromise();
  }
  /**
   * It deletes the transaction of the student when he returns the
   * book
   * @param id Student id
   */
  public deleteTransaction(id:string):Promise<Transaction>
  {
    this.specificTransactionUrl=this.urlTransaction+id;
    return this.http.delete<Transaction>(this.specificTransactionUrl).toPromise();
  } 
}
