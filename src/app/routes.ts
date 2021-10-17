import { Routes } from '@angular/router'
import {
    EventsListComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver

} from './events/index'
import { Error404Component } from './errors/404.component';


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    // this must be at the top because angular cannot distinguish between this above and the events/:id path
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    {
        path: 'user', // so anything within the user module will have this as a prefix...so like /user/profile
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
        // this is essentially saying when a route starts with /user, load the UserModule from that path after 'import'
    }
    
]