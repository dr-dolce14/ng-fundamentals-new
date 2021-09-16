import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
  //in the angular.json file, there is an "assets" array and this is where youc an make files statically available for the app
  // in that same file, there is a styles array
})
export class EventsAppComponent {
  title = 'ng-fundamentals-new';
}
