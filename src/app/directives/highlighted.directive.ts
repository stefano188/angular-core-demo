import { HttpClient } from '@angular/common/http';
import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    /* @Host() private service: AnyService */
    /* 
        @Host() decorator is used commonly when we want the Host component (e.g. CourseCardComponent) of the directive (e.g. [highlighted])
        to access to the same instance of the service
    */

    constructor(/* @Host() private service: AnyService */) {

        console.log('Directive created..');

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {

        console.log($event);

        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
