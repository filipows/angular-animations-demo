import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation]
})
export class AppComponent {

  prepRouteState(outlet: RouterOutlet) {
    console.log('animation: ', outlet.activatedRouteData.animation)
    return outlet.activatedRouteData.animation;
  }
}
