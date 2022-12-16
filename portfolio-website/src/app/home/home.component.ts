import { Component, ElementRef, ViewChild } from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;

  constructor(private parallaxService: ParallaxService) {}

  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
  }
}
