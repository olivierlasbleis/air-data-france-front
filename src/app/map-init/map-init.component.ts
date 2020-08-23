import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as vega from 'vega';
import { View , Spec} from 'vega';


@Component({
  selector: 'app-map-init',
  templateUrl: './map-init.component.html',
  styleUrls: ['./map-init.component.scss']
})
export class MapInitComponent implements OnInit {

  @Input() id: any;
  @Output() outgoingData = new EventEmitter<any>();
  @Input() pathToData: string;
  @Input() chartWidth: number;
  view: View;

  constructor() { }

  ngOnInit(): void {
    vega.loader().load(this.pathToData)
      .then((data) => { this.vegaInit(JSON.parse(data)); });
  }
  valuesNbPositifCovid=[];

  public vegaInit(spec: Spec) {
   
    
        this.view = new vega.View(vega.parse(spec))
          .renderer('svg')
          .initialize('#' + this.id)
        .width(850)
        .height(700)
          .hover()
          .run();
        this.sendData(this.view);
        console.log(spec)

    
  }

  public sendData(data: View) {
    this.outgoingData.emit(data);
  }

}
