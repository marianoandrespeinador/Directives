import {
    OnInit
    , Directive
    , ElementRef
    , Renderer2
    , HostListener
    , HostBinding
    , Input
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor = 'transparent';
    @Input('appBetterHighlight') highLightColor = 'blue';
    //On the element, on which this directive sits, access the "style" property
    @HostBinding('style.backgroundColor') backgroundColor: string; 

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    //el host listener tiene disponibles todos los eventos del DOM
    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highLightColor;
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }


}