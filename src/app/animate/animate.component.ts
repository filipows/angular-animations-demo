import { Component, OnInit } from '@angular/core';

import { bounceOutAnimation, zoomInDownAnimation } from '../shared/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    bounceOutAnimation('bounceOut', 700),
    zoomInDownAnimation('zoomInDown', 1000)
  ]
})
export class AnimateComponent {


  animationTriggers = {
    bounceOut: false,
    zoomInDown: false
  };

  animationIterator = 0;

  constructor() { }

  animateNext() {
    const trigger = Object.keys(this.animationTriggers)[this.animationIterator++ % Object.keys(this.animationTriggers).length];
    this.animationTriggers[trigger] = !this.animationTriggers[trigger];
  }
}
