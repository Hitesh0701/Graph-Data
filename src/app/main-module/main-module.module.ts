import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LandingComponent } from './components/landing/landing.component';
import { GraphDataComponent } from './components/graph-data/graph-data.component';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainLayoutComponent, LandingComponent, GraphDataComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    ChartsModule,
    FormsModule,
    CalendarModule
  ]
})
export class MainModuleModule { }
