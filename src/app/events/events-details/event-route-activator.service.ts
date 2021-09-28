import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventsService } from "../shared/events.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventsService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getSingleEvent(+route.params['id'])
        // the plus sign casts it as a number?

        if (!eventExists) {
            this.router.navigate(['/404'])
        }
        return eventExists
        
    }
}