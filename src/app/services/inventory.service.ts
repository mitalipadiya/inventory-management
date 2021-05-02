import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Stock } from '../stock';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  private stockUrl = 'api/stocks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(this.stockUrl)
      .pipe(catchError(this.handleError<Stock[]>('getStocks', [])));
  }

  deleteStock(id: number): Observable<Stock> {
    const url = `${this.stockUrl}/${id}`;

    return this.http.delete<Stock>(url, this.httpOptions).pipe(
      catchError(this.handleError<Stock>('deleteStock'))
    );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
