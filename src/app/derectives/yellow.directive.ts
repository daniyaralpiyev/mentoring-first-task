import {Directive, ElementRef, HostBinding, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[yellow]',
  standalone: true
})
export class YellowDirective {
  // Выводит сообщение в консоль только при наведении
  // @HostListener('mouseenter')
  // click(): void {
  //   console.log('mouseenter');
  // }

  color: string = '#333947';
  textTransform: string = 'lowerCase';

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this.color;
  }

  @HostBinding('style.textTransform')
  get textTransformGetter(): string {
    return this.textTransform;
  }

  @HostListener('mouseenter')
  enter(): void {
    this.color = 'red'
    this.textTransform = 'upperCase';
    console.log('red');
  }

  @HostListener('mouseleave')
  leave(): void {
    this.color = 'dimgray'
    this.textTransform = 'lowerCase';
    console.log('dimgray');
  }
}
