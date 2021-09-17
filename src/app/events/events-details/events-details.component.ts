import { Component, OnInit } from "@angular/core";
import { EventsService } from "../shared/events.service";

@Component({
    templateUrl: './events-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image: { height: 100px; }
    `]

})
export class EventsDetailsComponent implements OnInit {
    event:any
    
    constructor(private eventsService: EventsService) {

    }

    ngOnInit(){
        this.event = this.eventsService.getSingleEvent(1) 
    }
}