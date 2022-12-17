import { Component , ViewChild, ElementRef} from '@angular/core';
import { ParallaxService } from '../services/parallax.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // imageUrl = 'https://picsum.photos/200';

  @ViewChild('elem') elem: ElementRef = {} as ElementRef;

  constructor(private parallaxService: ParallaxService) {}

  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
  }
}
