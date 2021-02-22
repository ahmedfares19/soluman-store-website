import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsComponent } from './home-components/products/products.component';
import { ListProductsComponent } from './home-components/list-products/list-products.component';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent, ProductsComponent, ListProductsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    // BrowserAnimationsModule
  ],
  exports: [HomeComponent, ProductsComponent, ListProductsComponent]
})
export class PagesModule {
  constructor(){
  }
 }
