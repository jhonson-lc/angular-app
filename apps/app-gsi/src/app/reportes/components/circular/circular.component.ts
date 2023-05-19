import { Component } from "@angular/core";
import { Color, ScaleType, LegendPosition } from "@swimlane/ngx-charts";

@Component({
  selector: "gsi-circular",
  templateUrl: "./circular.component.html",
  styleUrls: ["./circular.component.css"],
})
export class CircularComponent {
  datos = [
    {
      name: "Egresados",
      value: 900,
    },
    {
      name: "Estudiantes",
      value: 1000,
    },
    {
      name: "Titulados",
      value: 800,
    },
    {
      name: "Empleados",
      value: 700,
    },
  ];

  view: [number, number] = [700, 400];
  schema: Color = {
    name: "miEsquema",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };
  legend = true;
  legendPosition: LegendPosition = LegendPosition.Right;
  gradient = true;
  labels = true;
  doughnut = false;
}
