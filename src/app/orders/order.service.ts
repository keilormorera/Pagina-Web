import { Injectable } from "@angular/core";
import { Order } from "./order";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class OrderService {
  private _orderUrl = "http://localhost:8000/orders";

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Order[]> {
    return this._http
      .get<Order[]>(this._orderUrl)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
