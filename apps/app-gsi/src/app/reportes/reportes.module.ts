import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { CircularComponent } from './components/circular/circular.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineComponent } from './components/line/line.component';


@NgModule({
  declarations: [
    PageReportsComponent,
    CircularComponent,
    VerticalComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NgxChartsModule
  ]
})
export class ReportesModule { }
