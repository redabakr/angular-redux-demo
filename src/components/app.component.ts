import {Component, ViewEncapsulation} from '@angular/core';
import {TrafficLightComponent} from "./trafficlight.component";
import {TrafficlightControler} from "./trafficlight-control.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  directives:[TrafficLightComponent, TrafficlightControler],
  styles:[`
  html{
    background: linear-gradient(#08f, #fff);
    padding: 40px;
    width: 170px;
    height: 100%;
    margin: 0 auto;
  }
  `],
  template: `
    <controller></controller>
    <traffic-light></traffic-light>
  `
})

export class AppComponent {}
