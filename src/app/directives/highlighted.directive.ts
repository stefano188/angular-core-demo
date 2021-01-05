import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hglht' /* export this directive with that name */
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output('toggleHighlight')
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log('hightlighted directive created');
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
