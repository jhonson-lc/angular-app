import { Component,EventEmitter,Output } from '@angular/core';
import { IMenu, MenuService } from 'src/app/helper/services/menu.service';

@Component({
  selector: 'gsi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  listaMenu: IMenu[]
  expand: boolean = true

  constructor(private menuService: MenuService) {
    this.listaMenu = this.menuService.getMenu();
  }

  @Output() toggleMenu:EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleExpand(){
    this.expand = !this.expand;
    this.toggleMenu.emit(this.expand);
  }
}
