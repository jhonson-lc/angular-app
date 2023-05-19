import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Entidad } from '../../interfaces/entidad';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'gsi-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})


export class LineComponent implements OnInit{
  temperaturas:{
    name:string,
    series:{
      name:string,
      value:number
    }[]
  }[]=[

  ];

  view: [number,number] = [700, 300];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  legendPosition = LegendPosition.Below;
  xAxisLabel: string = 'Hora';
  yAxisLabel: string = 'Temperatura';
  timeline: boolean = true;

  schema = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: 'miEsquema',
    selectable: true,
    group: ScaleType.Ordinal,
  };
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getTemperaturas().subscribe(
      (data:any)=>{
        const datos:any[] = data.data.timelines[0].intervals.map(
          (intervalo:any)=>{
            return {
                name: intervalo.startTime,
                value: intervalo.values.temperature
              }
          })
            this.temperaturas = [
              {
                name: "Temperatura",
                series: datos
              }]
          }
          )
  }
}

