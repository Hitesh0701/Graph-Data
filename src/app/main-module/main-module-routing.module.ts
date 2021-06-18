import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LandingComponent } from './components/landing/landing.component';
import { GraphDataComponent } from './components/graph-data/graph-data.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"landing",
        component:LandingComponent
      },
      {
        path:"graph-data",
        component:GraphDataComponent
      },
      {
        path:"",
        redirectTo:"landing",
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
