import { Routes } from '@angular/router'
import { EventsDetailsComponent } from "./events/events-details/events-details.component";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventsDetailsComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]