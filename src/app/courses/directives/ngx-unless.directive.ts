import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/* ngx: stands for extra, it means that it is not part of angular core */
@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible = false;
  
  constructor(
      private templateRef: TemplateRef<any>, /* reference to the template to be rendered */
      private viewContainer: ViewContainerRef /* angular class that allows to instanciate a view (template, component..) */) 
      { 

      }

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
