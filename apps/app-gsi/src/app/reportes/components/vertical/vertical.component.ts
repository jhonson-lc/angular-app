import { Component } from '@angular/core';
import { Entidad } from '../../interfaces/entidad';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'gsi-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent {
  datos:Entidad[]=[
    {
      name:"Tungurahua",
      value: 1000000
    },
    {
      name:"Chimborazo",
      value: 2000000
    },
    {
      name:"Cotopaxi",
      value: 3000000
    },
    {
      name:"Bolivar",
      value: 4000000
    },
    {
      name:"Pastaza",
      value: 5000000
    }
  ]

  view:[number,number] = [700, 400];
  schema: Color = {
    name: 'miEsquema',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  legend = true;
  legendPosition:LegendPosition = LegendPosition.Right;
  xAxis= true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Provincias';
  yAxisLabel = 'Población';
}
