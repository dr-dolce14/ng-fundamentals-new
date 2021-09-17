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

- [class.green]="event?.time === '8:00 am'" : this is a CLASS BINDING, which means if the right side of the equals sign evaluates to true, use the class green on this element.




