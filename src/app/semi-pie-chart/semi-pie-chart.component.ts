import { Component, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-semi-pie-chart',
  standalone: true,
  templateUrl: './semi-pie-chart.component.html',
  styleUrls: ['./semi-pie-chart.component.css']
})
export class SemiPieChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    let chart = am4core.create("semi-pie", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // Disable amCharts logo
    chart.logo.disabled = true;

    // Add data
    chart.data = [
      {
        country: "21 Mi",
        value: 401
      },
      {
        country: "18 Mi",
        value: 300
      },
      {
        country: "12 Mi",
        value: 200
      }
    ];

    // Configure chart properties
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  

    // Add and configure Series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;


    series.labels.template.fontSize = 10; // Set label font size
    series.labels.template.fill = am4core.color('#FFFFFF');

  }
}
