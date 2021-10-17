import { Component } from '@angular/core'
import { Router } from '@angular/router' // to navigate from code, you need to inject Angular's Router service
import { EventsService } from './shared/index'

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999 }
  `]
    
})

export class CreateEventComponent {
    newEvent;
    isDirty:boolean = true;
    // event: any 
    // this event above is to demonstrate that we can pre-populate a form if we use the [(ngModel)]

    constructor(private router: Router, private eventService:EventsService) {
        // see above Router import
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    
    // ngOnInit(){
    //     this.event = {
    //         name:
    //         date:
    //         time:
    //         price:
    //         location: {
    //             address:
    //             city:
    //             country:
    //         },
    //         onlineUrl:
    //         imageUrl:

    //     }
    // }

    cancel() {
        this.router.navigate(['/events'])
        //so all that needs to be done to navigate from code is call navigate on the router and pass in the route we want to navigate to
    }

}