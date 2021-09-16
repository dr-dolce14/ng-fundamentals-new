// child component to events-list

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component ({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2> 
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <!--- <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button> --->
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventsThumbnailComponent {
    @Input() event: any // this input decorator tells angular that this event will be passed in from another component, a parent 
    // also, this 'event' has nothing to do with angular, it is the variable name from the exercise

    // @Output() eventClick = new EventEmitter()
    // this output means that we want the parent component to listen to what's going on in this child component

    // handleClickMe() {
    //     this.eventClick.emit(this.event.location.city)
    // }

    // someProperty: any = 'some value'

    // logFoo() {
    //     console.log('foo')
    // }

}


