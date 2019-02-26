import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysqlConfigService {
  private baseUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/all');
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/create', book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, { responseType: 'text' });
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}' + '/update/${id}', value);
  }
}
