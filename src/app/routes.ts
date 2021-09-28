import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { EventsDetailsComponent } from "./events/events-details/events-details.component";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent },
    // this must be at the top because angular cannot distinguish between this above and the events/:id path
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]