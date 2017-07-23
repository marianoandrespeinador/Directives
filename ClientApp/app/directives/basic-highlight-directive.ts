import { OnInit, Directive, ElementRef }from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    //por dependency injection, angular toma esto del elemento donde se utiliza esta directiva
    constructor(private elementRef: ElementRef) {
        
    }
    //hook OnInit, de la interfaz que implementa
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
    }

}