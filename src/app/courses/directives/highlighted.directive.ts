import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs: 'hglht' /* export this directive with that name */
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output('toggleHighlight')
  toggleHighlight = new EventEmitter();

    /* @Host() private service: AnyService */
    /* 
        @Host() decorator is used commonly when we want the Host component (e.g. CourseCardComponent) of the directive (e.g. [highlighted])
        to access to the same instance of the service
    */

    constructor(/* @Host() private service: AnyService */) {

    }

  /* DOM Property */
  // @HostBinding('className')
  @HostBinding('class.highlighted')
  get cssClass() {
    // return 'highlighted';
    return this.isHighlighted;
  }
  

  // @HostBinding('style.border')
  // get cssClass() {
  //   return '2px solid red';
  // }

  /* DOM Attribute */
  @HostBinding('attr.disabled')
  get disabled() {
    return "false";
  }


  /* DOM Events */
  @HostListener('mouseover', /* ['$event'] option Native DOM Event */)
  mouseOver(/* $event */) {
    this.isHighlighted = true;

    /* console.log($event); */

    // custom event
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;

    // custom event
    this.toggleHighlight.emit(this.isHighlighted);
  }

  /* public api that can be called from a component that references this directive */
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
