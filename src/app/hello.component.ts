import { Component, Input, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
}) 
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit(){
    this.getChart();
  }
  getChart(){
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var iconPath = "M0 0 1 0V3.5L0 3.5V0";

var chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.paddingTop = am4core.percent(10);

chart.data = [{
  "name": "",
  "value": 20,
  "color": am4core.color("#808080")
},{
  "name": "Placement",
  "value": 80,
  "color": am4core.color("#E2A125")
}
];
var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.startLocation = 0.3
series.endLocation = 0.85
series.labels.template.disabled = true;

series.slicesContainer.background.fill = am4core.color("#808080")
series.slicesContainer.background.fillOpacity = 0.2;

series.maskSprite.path = iconPath;

//series.labelsContainer.width = am4core.percent(100);
series.alignLabels = false;
series.slices.template.propertyFields.fill = "color";
series.slices.template.propertyFields.stroke = "color";

// var gradientModifier = new am4core.LinearGradientModifier();
// gradientModifier.lightnesses = [0.2, -0.7];
// series.slices.template.fillModifier = gradientModifier;
// series.slices.template.strokeModifier = gradientModifier;

// this makes the fills to start and end at certain location instead of taking whole picture
series.endLocation = 1.0;
series.startLocation = 0;
// this makes initial fill animation
//series.hiddenState.properties.startLocation = 1.553;
//series.ticks.template.disabled = true;
//series.ticks.template.locationX = 0.7;
//series.labelsContainer.disabled = true;
//series.labelsContainer.width = 120;

// var sliderContainer = chart.createChild(am4core.Container);
// sliderContainer.marginTop = am4core.percent(5);
// sliderContainer.width = am4core.percent(80);
// sliderContainer.align = "center";
// sliderContainer.paddingRight = 120;


// var label = sliderContainer.createChild(am4core.Label);
// label.text = "move me!";
// label.dy = -40;
// label.isMeasured = false;

// var slider = sliderContainer.createChild(am4core.Slider);
// slider.start = 0;
// slider.background.fill = am4core.color("#676767");
// slider.background.fillOpacity = 0.2;

// doing it later for animation to finish
//setTimeout(initSlider, 1500);

// var title = chart.createChild(am4core.Label);
// title.text = "abc"
// title.fontSize = 20;
// title.fill = am4core.color("#390511");
// title.isMeasured = false;
// title.x = am4core.percent(100);
// title.horizontalCenter = "right";
// title.fontWeight = "600";

// let blurFilter = new am4core.BlurFilter();
// blurFilter.blur = 0;
//title.filters.push(blurFilter);
  }
}
