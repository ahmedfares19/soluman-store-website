import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagesModule } from './content/pages/pages.module';
import { MatIconModule } from '@angular/material/icon';
import { LocalizePipe } from './core/pipes/localize.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LocalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    // MatCheckboxModule,
    // MatRadioModule,
    // MatIconModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    PagesModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  providers: [MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
