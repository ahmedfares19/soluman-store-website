import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { langauges } from '../enums/languages.enum';
import { EUserData } from '../enums/localStroageProps.enum';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LangageService {

  constructor(private router:Router,public translate: TranslateService,private storage:LocalStorageService) {
    this.translate.setDefaultLang(langauges.english)
    const cLang = this.storage.getItem(EUserData.lang);
    if(cLang){
      this.translate.use(cLang)
    } else {
      this.translate.use(langauges.english)
    }
  }
  switchLang() {
    let newUrl;
    if (this.translate.currentLang === langauges.arabic)
    {
      this.translate.use(langauges.english)
      newUrl = this.router.url.replace('ar','en')
    }
    else
    {
      this.translate.use(langauges.arabic)
      newUrl = this.router.url.replace('en','ar')
    }
    this.router.navigateByUrl(newUrl)
  }

  setLang(lang: langauges) {
    console.log("inside service",lang);
    this.translate.use(lang);
  }

}
