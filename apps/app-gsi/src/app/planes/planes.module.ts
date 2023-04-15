import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { PlanComponent } from './services/plan/plan.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    PlanComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ]
})
export class PlanesModule { }
