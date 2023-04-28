import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TitleComponent } from './components/title/title.component';
import { DownloadComponent } from './components/download/download.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PaginatorComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    PaginatorComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule
  ],
})



export class SharedModule { }
