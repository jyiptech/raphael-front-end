
import { Component, ViewEncapsulation, ElementRef, OnInit,  Renderer2, HostListener } from '@angular/core';



@Component({
  selector: 'app-rf-modal',
  templateUrl: './rf-modal.component.html',
  styleUrls: ['./rf-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RfModalComponent implements OnInit {

  private element: any;
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    
    if (event && event.target && (event.target as HTMLElement).className == "rf-modal") {
      this.close();
    }
  }
  constructor(private el: ElementRef, private renderer: Renderer2,) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    this.renderer.appendChild(document.body, this.element);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.element.remove();
  }

  // open modal
  open(): void {
    this.renderer.setStyle(this.element, 'display', 'block');
    this.renderer.addClass(document.body, 'rf-modal-open');
  }

  // close modal
  close(): void {
    this.renderer.setStyle(this.element, 'display', 'none');
    this.renderer.removeClass(document.body, 'rf-modal-open');
  }

}
