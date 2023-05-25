import { Component, ContentChildren, Input, QueryList, SimpleChanges, ViewChild} from '@angular/core';

import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';

@Component({
  selector: 'les-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() data: any
  @Input() metaDataColumns!: MetadataColumn[]
  columns: string[] = []

  @ContentChildren(MatColumnDef, {descendants: true}) columnDef!:QueryList<MatColumnDef>
  @ViewChild(MatTable,{static:true}) table!:MatTable<any>

  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns']){
      this.columns = this.metaDataColumns.map(column => column.field)
    }
  }

  ngAfterContentInit(){
    if(!this.columnDef){return}
    this.columnDef.forEach(columnDef => {
      this.columns.push(columnDef.name)
      this.table.addColumnDef(columnDef)})
  }
}
