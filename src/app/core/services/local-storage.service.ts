import { Injectable } from '@angular/core';
import { langauges } from '../enums/languages.enum';
import { EUserData } from '../enums/localStroageProps.enum';


export interface IUserData {
  username?: string,
  fullname?: string,
  phone?: string,
  token?: string,
  lang?: langauges
}
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _userData: IUserData = {
    lang: langauges.english
  };
  Lang;
  private _storageName: string = 'ss-user';
  constructor() {
    this._loadUser();
  }
  private _loadUser() {
    this._userData = JSON.parse(localStorage.getItem(this._storageName)) || this._userData;
  }
  private _updateStorage() {
    localStorage.removeItem(this._storageName);
    localStorage.setItem(this._storageName, JSON.stringify(this._userData));
  }
  getItem(key: string) {
    this._updateStorage();
    return this._userData[key];
  }
  setItem(key: string, value: string) {
    this._loadUser();
    if (this._userData != null) {
      this._userData[key] = value;
      this._updateStorage();
    } else {
      this._updateStorage();
      this._userData[key] = value;
      this._updateStorage();
    }

  }
  setUserData(user: IUserData) {
    this._userData = user;
    this._updateStorage();
  }
  checkTokenExitst(): boolean {
    return this.getItem(EUserData.token) ? true : false;
  }

}
