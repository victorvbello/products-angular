import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Product } from "../types";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productsUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.productsUrl}/products`, httpOptions)
      .pipe(
        tap(_ => console.log("fetched products")),
        catchError(this.handleError("getProducts", []))
      );
  }

  getProduct(partNumber: String): Observable<Product> {
    return this.http
      .get<Product>(`${this.productsUrl}/product/${partNumber}`, httpOptions)
      .pipe(
        tap(_ => console.log("fetched product")),
        catchError(this.handleError<Product>("getProduct", new Product()))
      );
  }
}
