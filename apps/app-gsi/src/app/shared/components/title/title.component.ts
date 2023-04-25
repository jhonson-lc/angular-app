import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from 'src/app/helper/services/menu.service';

@Component({
  selector: 'gsi-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  path: IMenu

  constructor(private menuServicio: MenuService,
    private activitedRoute: ActivatedRoute) {
      const urlActive = '/' + activitedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
      this.path = menuServicio.getMenuByURL(urlActive);
  }
}
