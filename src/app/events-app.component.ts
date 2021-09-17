import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <!--- <events-list></events-list> --->
  
  <router-outlet></router-outlet>
  `
  // don't need the <events-list></events-list> selector because we are routing to that page directly...needed to add routes, which is in routes file of app folder


  //in the angular.json file, there is an "assets" array and this is where youc an make files statically available for the app
  // in that same file, there is a styles array
})
export class EventsAppComponent {
  title = 'ng-fundamentals-new';
}
