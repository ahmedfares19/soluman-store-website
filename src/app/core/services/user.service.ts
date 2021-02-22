import { Injectable } from '@angular/core';
import { EUserData } from '../enums/localStroageProps.enum';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage:LocalStorageService) { }

  isLogedIn():boolean{
    return this.storage.getItem(EUserData.token)?true:false;
  }
  
}
