
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow2]'
})
export class Rainbow2Directive {

  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.border-color') borderColor: string = '';

  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }

  private changeColor() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
  constructor() { }

}
