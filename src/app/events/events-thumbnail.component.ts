// child component to events-list

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from './shared/index'

@Component ({
    selector: 'events-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2> 
        <div>Date: {{event?.date}}</div>

         <!--- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
        Time: {{event?.time}} --->

        <!--- can also do [style.color] or [ngStyle]="getStartTimeStyle()" --->

        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}} 
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>

        <div>Price: \${{event?.price}}</div>

        <div *ngIf="event?.location"> 
        <!--- <div [hidden]="!event?.location"> --->
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>

       <div *ngIf="event?.onlineUrl"> 
        <!--- <div [hidden] = "!event?.onlineUrl"> --->
            Online URL: {{event?.onlineUrl}}
        </div>

        <!--- <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button> --->
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventsThumbnailComponent {
    @Input() event:IEvent // this input decorator tells angular that this event will be passed in from another component, a parent 
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

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
        // ngClass expects an object to be returned, but could also use a string, or an array of strings
        // if (this.event && this.event.time === '8:00 am)
            //return 'green bold'
        // return ''
        //lastly, could be
            //return ['green', 'bold']
        // return []
    }

    // getStartTimeStyle(): any {
    //     if (this.event && this.event.time === '8:00 am')
    //         return {color: '#003300', 'font-weight': 'bold'}
    //     return {}
    // }

}


