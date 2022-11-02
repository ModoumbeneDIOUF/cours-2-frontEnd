import { NgFomControlComponent } from './ng-fom-control/ng-fom-control.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: NgFomControlComponent},
  {path: 'pageOne', component: PageOneComponent},
  {path: 'pageTwo', component: PageTwoComponent},
  {path: 'pageThree/:id', component: PageThreeComponent},


  {path: '**', component: PageNotFoundComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
