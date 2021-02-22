import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
		path: ':lang',
		loadChildren: () => import('./content/pages/pages.module').then(m => m.PagesModule)
	},
  {
    path:"**",
    redirectTo:"/en/home",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
