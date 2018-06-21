import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
@Injectable()
export class ClassDataService {
  private _url= './assets/classdata.json';
  constructor(private _http: Http) {}
  getclasses (): Observable<Response> {
    return this._http.get(this._url).pipe(map((response: Response) => response.json()));
  }
}