import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'air-data-france-front';

  mainChart: any;
subChart: any;


charts = [{name: 'map', path: '../assets/charts/franceCovid.json'}];

public handleMainChart(chartData: any) {
  this.mainChart = chartData;
}
}
