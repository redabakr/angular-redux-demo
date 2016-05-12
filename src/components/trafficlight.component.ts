import {Component, ViewEncapsulation} from "@angular/core";
import {Light} from "./light.component";
import {MapState} from "angular2-redux-bindings";
import {store} from '../store'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector     : 'traffic-light',
  styles       : [`
  .protector {
    background: transparent;
    width: 180px;
    height: 0;
    position: absolute;
    top: 20px;
    left: -35px;
    border-right: solid 30px transparent;
    border-left: solid 30px transparent;
    border-top: solid 90px #111;
    border-radius: 10px;
    z-index: -1;
  }

  .protector:nth-child(2){
    top: 140px;
  }
  
  .protector:nth-child(3){
    top: 260px;
  }
  
  .trafficlight{
    background: #222;
    background-image: linear-gradient(transparent 2%, #111 2%, transparent 3%, #111 30%);
    width: 170px;
    height: 400px;
    border-radius: 10px;
    position: relative;    
    border: solid 5px #333;
  }
  
  
  .trafficlight:before{
    background: #222;
    background-image: radial-gradient(#444, #000);
    content: "";
    width: 170px;
    height: 150px;
    margin: 0 auto;
    position: absolute;
    top: -30px;
    margin-left: 0px;
    border-radius: 50%;
    z-index: -1;
  }
  
  .trafficlight:after{
    background: #222;
    background-image: linear-gradient(-0deg, #444, #ccc 30%, #000);
    content: "";
    width: 75px;
    height: 800px;
    margin-left: 50px;
    position: absolute;
    top: 150px;
    z-index: -1;
  }
  `],
  directives   : [Light],
  template     : `
    <div class="trafficlight">
      <div class="protector"></div>
      <div class="protector"></div>
      <div class="protector"></div>
      
      <light *ngFor="let light of lights" 
               [color]='light'></light>      
    </div>
   `
})

export class TrafficLightComponent {

  @MapState('lights')
  private lights;

  constructor() {
    store.dispatch({type: 'AUTO'});
  }
}
