import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'bubble-chart',
  standalone: true,
  imports: [],
  templateUrl: './bubble-map-chart.component.html',
  styleUrls: ['./bubble-map-chart.component.css'],
})
export class BubbleMapChartComponent implements AfterViewInit, OnDestroy {
  private root!: am5.Root;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  createChart() {
    // Create root element
    this.root = am5.Root.new('bubble-chart');

    this.root._logo?.dispose();

    // Set themes
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Create the map chart
    let chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        panX: 'rotateX',
        panY: 'rotateY',
        projection: am5map.geoMercator(),
      })
    );

    // Create series for background fill
    let backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: this.root.interfaceColors.get('alternativeBackground'),
      fillOpacity: 0,
      strokeOpacity: 0,
    });
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    // Create main polygon series for countries
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: this.root.interfaceColors.get('alternativeBackground'),
      fillOpacity: 0.15,
      strokeWidth: 0.5,
      stroke: this.root.interfaceColors.get('background'),
    });

    // Create polygon series for circles
    let circleTemplate = am5.Template.new<am5.Circle>({});

    let bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(this.root, {
        calculateAggregates: true,
        valueField: 'value',
        polygonIdField: 'id',
      })
    );

    bubbleSeries.bullets.push(() => {
      let circle = am5.Circle.new(this.root, {
        radius: 10,
        tooltipText: '{name}: {value}',
        templateField: 'circleTemplate',
      });

      return am5.Bullet.new(this.root, {
        sprite: circle,
      });
    });

    bubbleSeries.set('heatRules', [
      {
        target: circleTemplate,
        min: 3,
        max: 30,
        key: 'radius',
        dataField: 'value',
      },
    ]);

    let colors = am5.ColorSet.new(this.root, {});

    bubbleSeries.data.setAll([
      {
        id: 'AF',
        name: 'Afghanistan',
        value: 32358260,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'AL',
        name: 'Albania',
        value: 3215988,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'DZ',
        name: 'Algeria',
        value: 35980193,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'AO',
        name: 'Angola',
        value: 19618432,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'AR',
        name: 'Argentina',
        value: 40764561,
        circleTemplate: { fill: colors.getIndex(3) },
      },
      {
        id: 'AM',
        name: 'Armenia',
        value: 3100236,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'AU',
        name: 'Australia',
        value: 22605732,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'AT',
        name: 'Austria',
        value: 8413429,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'GM',
        name: 'Gambia',
        value: 1776103,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'GE',
        name: 'Georgia',
        value: 4329026,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'DE',
        name: 'Germany',
        value: 82162512,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'GH',
        name: 'Ghana',
        value: 24965816,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'GR',
        name: 'Greece',
        value: 11390031,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'GT',
        name: 'Guatemala',
        value: 14757316,
        circleTemplate: { fill: colors.getIndex(4) },
      },
      {
        id: 'GN',
        name: 'Guinea',
        value: 10221808,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'GW',
        name: 'Guinea-Bissau',
        value: 1547061,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'GY',
        name: 'Guyana',
        value: 756040,
        circleTemplate: { fill: colors.getIndex(3) },
      },
      {
        id: 'HT',
        name: 'Haiti',
        value: 10123787,
        circleTemplate: { fill: colors.getIndex(4) },
      },
      {
        id: 'HN',
        name: 'Honduras',
        value: 7754687,
        circleTemplate: { fill: colors.getIndex(4) },
      },
      {
        id: 'HK',
        name: 'Hong Kong, China',
        value: 7122187,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'HU',
        name: 'Hungary',
        value: 9966116,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'IS',
        name: 'Iceland',
        value: 324366,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'IN',
        name: 'India',
        value: 1241491960,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'ID',
        name: 'Indonesia',
        value: 242325638,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'IR',
        name: 'Iran',
        value: 74798599,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'IQ',
        name: 'Iraq',
        value: 32664942,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'IE',
        name: 'Ireland',
        value: 4525802,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'IL',
        name: 'Israel',
        value: 7562194,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'IT',
        name: 'Italy',
        value: 60788694,
        circleTemplate: { fill: colors.getIndex(8) },
      },
      {
        id: 'JM',
        name: 'Jamaica',
        value: 2751273,
        circleTemplate: { fill: colors.getIndex(4) },
      },
      {
        id: 'JP',
        name: 'Japan',
        value: 126497241,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'JO',
        name: 'Jordan',
        value: 6330169,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'KZ',
        name: 'Kazakhstan',
        value: 16206750,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'KE',
        name: 'Kenya',
        value: 41609728,
        circleTemplate: { fill: colors.getIndex(2) },
      },
      {
        id: 'KP',
        name: 'Korea, Dem. Rep.',
        value: 24451285,
        circleTemplate: { fill: colors.getIndex(0) },
      },
      {
        id: 'KR',
        name: 'Korea, Rep.',
        value: 48391343,
        circleTemplate: { fill: colors.getIndex(0) },
      },
    ]);

    // Add globe/map switch
    let cont = chart.children.push(
      am5.Container.new(this.root, {
        layout: this.root.horizontalLayout,
        x: 10,
        y: 40,
      })
    );

    cont.children.push(
      am5.Label.new(this.root, {
        centerY: am5.p50,
        text: 'Map',
      })
    );

    let switchButton = cont.children.push(
      am5.Button.new(this.root, {
        themeTags: ['switch'],
        centerY: am5.p50,
        icon: am5.Circle.new(this.root, {
          themeTags: ['icon'],
        }),
      })
    );

    switchButton.on('active', () => {
      if (!switchButton.get('active')) {
        chart.set('projection', am5map.geoMercator());
        backgroundSeries.mapPolygons.template.set('fillOpacity', 0);
      } else {
        chart.set('projection', am5map.geoOrthographic());
        backgroundSeries.mapPolygons.template.set('fillOpacity', 0.1);
      }
    });

    cont.children.push(
      am5.Label.new(this.root, {
        centerY: am5.p50,
        text: 'Globe',
      })
    );

    // Make stuff animate on load
    chart.appear(1000, 100);
  }
}
