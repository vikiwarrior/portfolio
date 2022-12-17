import { Component, ElementRef, ViewChild ,Renderer2 } from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;
 @ViewChild('elem1') elem1: ElementRef = {} as ElementRef;

 mouseX = 0;
 mouseY = 0;
 top = 60;
 left = 60;
  constructor(private parallaxService: ParallaxService ,private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
    this.renderer.listen(
      'document',
      'mousemove',
      (event: MouseEvent) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        // console.log(this.mouseX);
        
        this.updatePosition();
      }
    );
    // this.parallaxService.applyParallax1(this.elem1.nativeElement);
    
  }

  updatePosition() {
    this.elem1.nativeElement.style.top = this.mouseY + 'px';
    // console.log(this.elem1.nativeElement.top);
    this.elem1.nativeElement.style.left = this.mouseX + 'px';
  }
}
