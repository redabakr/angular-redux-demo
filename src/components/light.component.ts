import {Component} from '@angular/core';

@Component({
  selector: 'light',
  inputs: ['color'],
  styles:[`
  .red{
  background: red;
  background-image: radial-gradient(brown, transparent);
  background-size: 5px 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 35px;
  box-shadow:
      0 0 20px #111 inset,
      0 0 10px red;
}

.yellow{
  background: yellow;
  background-image: radial-gradient(orange, transparent);
  background-size: 5px 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 145px;
  left: 35px;
  box-shadow:
      0 0 20px #111 inset,
      0 0 10px yellow;
}

.green{
  background: green;
  background-image: radial-gradient(lime, transparent);
  background-size: 5px 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 270px;
  left: 35px;
  box-shadow:
      0 0 20px #111 inset,
      0 0 10px lime;
}
  `],
  template: `<div [ngClass]="color"></div>`
})

export class Light {}