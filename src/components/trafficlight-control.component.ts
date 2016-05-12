import {Component} from "@angular/core";

@Component({
  selector: 'controller',
  styles  : [`
    .controller{
      position: absolute;      
      left: 15px;
      top: 15px;
      background-color: lightgray;
      padding: 10px;
    }        
    
    .group {margin-bottom: 10px;}
    
    button {
      cursor: pointer;
       font-weight: bold;
       font-size: 25px;
    }
    .btn {height: 50px;width: 100px;                       }
    .btn-block {width: 100%; height: 50px;}
    .btn-green {background-color: green;}
    .btn-yellow {background-color: yellow;}                                
    .btn-red {background-color: red;}
    .btn-blue {background-color: blue;}
                                
  `],
  template: `
    <div class="controller">
      <div class="group">
        <button class="btn-block">CHANGE MODE</button>
      </div>
      <div class="group">
        <button class="btn btn-red">STOP</button>
        <button class="btn btn-yellow">READY</button>
        <button class="btn btn-green">GO</button>
      </div>      
    </div>
    `
})

export class TrafficlightControler {}
