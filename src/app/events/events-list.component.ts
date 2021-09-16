// parent component to events-thumbnail

import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <events-thumbnail [event]="event1"></events-thumbnail>

    <!--- <events-thumbnail #thumbnail [event]="event1"></events-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button> --->

    <!--- <events-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></events-thumbnail> --->

</div>
    `
 // the [event] corresponds to the input property in the events-thumbnail component
 // the (eventClick) binding corresponds to the eventClick output property created on the child component; we are saying that when the eventClick event is fired on our thumbnail component, call the handleEventClicked method on this component. the $event refers to the data emitted with our event; you can only pass along a single value with an event emitter, so multiple values can be wrapped in an object first
 // the #thumbnail is a TEMPLATE VARIABLE (like a reference variable) to our child component, which then exposes any public method on that child component
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: "England"
        }
    }

    // handleEventClicked(data) {
    //     console.log('received: ', data)
    // }

}


