import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { EUserData } from '../enums/localStroageProps.enum';

import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  private _headers: Headers = new Headers();
  private _token: string;
  private _lang: string;
  constructor(private http: HttpClient, private storage: LocalStorageService) {

  }
  appendHeaders() {
    if (this.storage.checkTokenExitst()) {
      console.log("loged Out");
    } else {
      this._token = this.storage.getItem(EUserData.token);
      this._lang = this.storage.getItem(EUserData.lang);
      this._headers.append('Content-Type', 'application/json');
      this._headers.append('auth-token', this._token);
      this._headers.append('lang', this._lang)
    }

  }

  UPDATE(url: string, body: any): Observable<any> {
    try {
      return this.http.put(url, body);
    } catch (error) {
      return error;
    }
  }
  POST(url: string, body: any): Observable<any> {
    try {
      return this.http.post(url, body)
    } catch (error) {
      return error;
    }
  }

  GET(url: string): Observable<any> {
    try {
      return this.http.get(url);
    } catch (error) {
      return error
    }
  }

}
