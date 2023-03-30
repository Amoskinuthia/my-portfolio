import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  @ViewChild('typewriter', {static: true}) typewriterElement!: ElementRef;

  constructor() { }
  ngAfterViewInit() {
    const typewriter = this.typewriterElement.nativeElement;
    const text = typewriter.innerHTML;
    typewriter.innerHTML = '';
  
    const speed = 20;
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
      if (i === text.length) {
        typewriter.innerHTML = "";
        i = 0;
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

      }
    }
  }
}
 