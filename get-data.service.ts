import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataContent } from './content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // tslint:disable-next-line:variable-name
  private _url = 'https://demo.resthapi.com/auditLog';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getdata(): Observable<DataContent[]>{
    return this.http.get<DataContent[]>(this._url);
  }
}
