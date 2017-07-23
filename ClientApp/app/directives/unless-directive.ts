//This is a structural directive (like *ngIf)
// Unless is actually the opposite of ngIf
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }
    //Through DI, we get the reference to the template on which the structural component sits on, also the view container
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    }
}
