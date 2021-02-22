import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { langauges } from '../enums/languages.enum';
import { EUserData } from '../enums/localStroageProps.enum';
import { LangageService } from '../services/langage.service';
import { LocalStorageService } from '../services/local-storage.service';

@Pipe({
  name: 'localize',
  pure:true
})

export class LocalizePipe implements PipeTransform {
  localizedData = {
    home:{
      ar:'الرئسي',
      en:'home'
    }
  }
  constructor(private ls:LocalStorageService,private lang:LangageService){
     this.lang =JSON.parse(localStorage.getItem('ss-user')).lang
    
  }
  transform(value: string, ...args: unknown[]): unknown {
    return null
    
  }

}
