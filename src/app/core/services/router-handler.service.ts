import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { langauges } from '../enums/languages.enum';
import { EUserData } from '../enums/localStroageProps.enum';
import { LangageService } from './langage.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouterHandlerService {
  constructor(private innerRouter:Router,private ls:LocalStorageService,private lang:LangageService){}

  handleRoute(router:ActivatedRoute){
   router.params.subscribe( param => {
     if(param.lang === langauges.arabic || param.lang === langauges.english){
      this.ls.setItem(EUserData.lang,param.lang)
      console.log(">>", param.lang);
      this.lang.setLang(param.lang)
     } else {
      const currentLand =  this.ls.getItem(EUserData.lang) || langauges.english
      this.lang.setLang(param.currentLand)
      console.log("<<>>", currentLand);
      this.innerRouter.navigateByUrl(`/${currentLand}/home`)
     }
   })
  }
}
