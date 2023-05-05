import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Component({
  selector: 'gsi-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Output() onChangePage:EventEmitter<number> = new EventEmitter<number>();
  @Input() length: number = 0;
  pageSize = environment.PAGE_SIZE;
  currentPage = 0;

  constructor() { }

  changePage(event: any){
    this.currentPage = event.pageIndex ?? event.target.value;
    this.onChangePage.emit(this.currentPage);
  }
}
