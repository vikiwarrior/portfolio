import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {

  constructor() { }


  
  applyParallax(elem: HTMLElement) {
    // Add event listener
    window.addEventListener('mousemove', parallax);

    // Magic happens here
    function parallax(e :any) {
        // console.log(e)
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      
      // console.log(elem.offsetHeight)
    //   const _w = 200 / 2;
    //   const _h = 200 / 2;
      
//    console.log(elem.style.backgroundPosition.split(',').forEach(element => {
//     element()  
//    }))
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depth1 = `${70-(_mouseX - _w) * (0.01)/2}% ${30-(_mouseY - _h) * (0.04)/2}%`;
      const _depth2 = `${80-(_mouseX - _w) * 0.002}% ${30-(_mouseY - _h) * 0.002}%`;
      const _depth3 = `${(80-(_mouseX - _w) * 0.006)}% ${30-(_mouseY - _h) * 0.006}%`;
      const x = `${_depth1}, ${_depth2}, ${_depth3}`;
      // const x = `${_depth1}`;
      // console.log(x);
      elem.style.backgroundPosition = x;
   
    }
  }

  applyParallax1(elem: HTMLElement) {
    window.addEventListener('mousemove', parallax);

    // Magic happens here
    function parallax(e :any) {
        // console.log(e)
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      
      // console.log(elem.offsetHeight)
    //   const _w = 200 / 2;
    //   const _h = 200 / 2;
      
//    console.log(elem.style.backgroundPosition.split(',').forEach(element => {
//     element()  
//    }))
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depth1 = `${70-(_mouseX - _w) * (0.01)/2}% ${30-(_mouseY - _h) * (0.04)/2}%`;
      const _depth2 = `${80-(_mouseX - _w) * 0.002}% ${30-(_mouseY - _h) * 0.002}%`;
      const _depth3 = `${(80-(_mouseX - _w) * 0.006)}% ${30-(_mouseY - _h) * 0.006}%`;
      const x = `${_depth1}, ${_depth2}, ${_depth3}`;
      // const x = `${_depth1}`;
      // console.log(x);

  //     top: calc(30% - 20px);
  // left: calc(75% - 20px);
      elem.style.left = `${90 +(_mouseX - _w) * (0.006)/2}%`;
      elem.style.top = `${90+(_mouseY - _h) * (0.006)/2}%`;

    }
}
}

