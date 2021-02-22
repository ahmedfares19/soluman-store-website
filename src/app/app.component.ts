import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangageService } from './core/services/langage.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { RouterHandlerService } from './core/services/router-handler.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor(
    private f: LangageService,
    public translate: TranslateService,
    private userService: UserService) {

  }
  title = 'website';

  s() {
    this.f.switchLang()
  }
}
