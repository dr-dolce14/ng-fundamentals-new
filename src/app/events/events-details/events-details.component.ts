import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/events.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from '../shared/index'

@Component({
    templateUrl: './events-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]

})
export class EventsDetailsComponent implements OnInit {
    event:IEvent
    
    constructor(private eventsService: EventsService, private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.event = this.eventsService.getSingleEvent(+this.route.snapshot.params['id'])
    }
}