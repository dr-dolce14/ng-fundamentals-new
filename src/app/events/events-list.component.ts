// parent component to events-thumbnail

import { Component, OnInit } from "@angular/core";
import { EventsService } from "./shared/events.service";

@Component({
    // selector: 'events-list',
    // don't need selector if we are routing to this directly, rather than hard-coding into html
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail [event]="event"></events-thumbnail>
        </div>
   
    </div>

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
export class EventsListComponent implements OnInit{
    events:any[]
    constructor (private eventsService: EventsService) {
    }

    ngOnInit () {
        this.events = this.eventsService.getEvents()
    }

    
    // let events = [all that data]
    // handleEventClicked(data) {
    //     console.log('received: ', data)
    // }

}


