import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PieChartComponent implements OnInit, OnDestroy {
  private chart: am4charts.PieChart | undefined;
  ngOnInit() {
    // Create chart instance
    this.chart = am4core.create('pie-chart', am4charts.PieChart);

    // Disable amCharts logo
    this.chart.logo.disabled = true;

    // Add data
    this.chart.data = [
      { country: 'Pelucias', litres: 501.9 },
      { country: 'Jogos', litres: 301.9 },
      { country: 'Bonecas', litres: 201.1 },
      { country: 'de Montar', litres: 165.8 },
    ];

    // Add and configure Series
    let pieSeries = this.chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';

    // Let's cut a hole in our Pie chart the size of 40% the radius
    this.chart.innerRadius = am4core.percent(55);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color('#4a2abb');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // Configure labels
    pieSeries.labels.template.fontSize = 10; // Set label font size
    pieSeries.labels.template.fill = am4core.color('#FFFFFF');
  }

  ngOnDestroy() {
    // Clean up chart when component is destroyed
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
