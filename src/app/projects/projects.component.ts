import { Component, OnInit, Renderer2, ElementRef,HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

 
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }


  ngOnInit() {
    // Get the button element
    const mybutton = this.elementRef.nativeElement.querySelector('#myBtn');
  
    // Add a scroll event listener to the window
    this.renderer.listen(window, 'scroll', () => {
      // If the user has scrolled down 20px, show the button
      if (window.pageYOffset > 20) {
        this.renderer.setStyle(mybutton, 'display', 'block');
      } else {
        this.renderer.setStyle(mybutton, 'display', 'none');
      }
    });
  }
  animationState = 'hide';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const pricingElement = this.elementRef.nativeElement.querySelector('.card');
    const pricingPosition = pricingElement.getBoundingClientRect().top + window.pageYOffset;

    if (scrollPosition >= pricingPosition - 400) {
      this.animationState = 'show';
    }
    else {
      this.animationState = 'hide';
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}

