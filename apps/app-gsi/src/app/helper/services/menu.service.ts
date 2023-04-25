import { Injectable } from '@angular/core';

export interface IMenu{
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listaMenu: IMenu[] = [
    {
      title: 'Clientes',
      url: '/clientes',
      icon: '/assets/icons/clientes.svg'
    },
    {
      title: 'Cobertura',
      url: '/cobertura',
      icon: '/assets/icons/cobertura.svg'
    },
    {
      title: 'Planes',
      url: '/planes',
      icon: '/assets/icons/planes.svg'
    },
    {
      title: 'Proveedores',
      url: '/proveedores',
      icon: '/assets/icons/proveedores.svg'
    },
    {
      title: 'Soporte',
      url: '/soporte',
      icon: '/assets/icons/soporte.svg'
    },
    {
      title: 'Stock',
      url: '/stock',
      icon: '/assets/icons/stock.svg'
    },
    {
      title: 'Técnicos',
      url: '/tecnicos',
      icon: '/assets/icons/tecnicos.svg'
    },
    {
      title: 'Usuarios',
      url: '/usuarios',
      icon: '/assets/icons/users.svg'
    }

  ]
  constructor() { }

  getMenu(): IMenu[]{
    return [...this.listaMenu];
  }

  getMenuByURL(url: string): IMenu{
    return this.listaMenu.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
