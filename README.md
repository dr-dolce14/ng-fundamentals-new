# NOTES

- when using {{ event.name }} , these double brackets means to look for that object on the component. This is interpolation, representing a one-way binding.

- when we add brackets around an html element, like [event], what we're saying is that one component, say component A, has an input parameter named "event", and we want to pass a value from another component, say component B, into component A. It is important that the term in brackets matches the name of an input parameter and that whatever value we wet that equal to matches the name of an element in component B (eg. [event]="event1"...event1 must be defined in component B).

    ### 3 different ways to handle inter-component communication
        1. Input properties
        2. Output properties
        3. Template variables


- {{user.name}} : this is INTERPOLATION
- <img [src]="user.imageUrl"/> : this is PROPERTY BINDING
- the two above use EXPRESSIONS

- <button (click)="doSomething()"></button>: this is EVENT BINDING and it uses a STATEMENT

- *ngFor is a STRUCTURAL DIRECTIVE because it adds/removes HTML elements from the HTML document (changes the structure of the DOM)

- ? - save navigation operator to deal with undefined. for example, event?.name

-[hidden] vs *ngIf...the latter should be used if elements stay hidden, rather than hiding and unhiding constantly

-[class.green]="event?.time === '8:00 am'" : this is a CLASS BINDING, which means if the right side of the equals sign evaluates to true, use the class green on this element.

- index.html is where you will find where the app is hosted: <base href="/"> ... we could change it to something like <base href="/home">

    ### For Routing:
    1. We added a router-outlet component to our events-app component, which is the top level component for this app
    2. We defined routes for each of our pages, including a default route...we did this in a 'routes.ts' file to make it easier (in the app folder)
    3. We loaded our routes into our App Module using the Router Module
    4. Added our base tage to our index.html page

    - the [routerLink] can be added to an html tag to provide a clickable link to a specified route. the expression for [routerLink] takes in an array, which is a list of path segments, followed by the parameters.

    ### Side note on Observables
    -Observables are like streams of data; they are like arrays where the data arrives over time. 
    -'Subject' is a type of observable
    -You get the data out of an observable by SUBSCRIBING to it


    ### Differences between the App Module and a Feature Module (or a Lazy Loadable module):
        1.
        -App module will import BrowswerModule
        -Feature module will import CommonModule

        2.
        -in Feature module, when importing RouterModule, we call .forChild so -> RouterModule.forChild
        -in App module, when importing RouterModule, we call .forRoot -> RouterModule.forRoot

    
    ### Forms
    -Template-based: allow you to build your form completely in your html template
    -Model-based(Reactive Forms): allow you to build your form and implement logic in your component; makes all of your validations logic unit testable

    ### Data binding
    -[( )]: two way binding(banana in a box)...used when updating info needs to be recorded and shown on page
    -( ): used to bind in the html to component direction (typically used to respond to events)
    -[ ]: used to bind in the component to html direction (displaying data from the component on the page)


    ### Reactive forms and Validators
    -you can pass multiple validators into FormControl(prepopulatedValue, validators) by making "validators" argument an ARRAY
    -FormControl(prepopulatedValue, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    -angular.io/docs....search for Validators




