import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appMyTooltip]',
})
export class MyTooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  tooltipElement: HTMLElement | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      console.log('chamou aqui');
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltipText);

    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', 'black');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'zIndex', '1000');

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement!.getBoundingClientRect();

    const top = hostPos.top + window.scrollY;
    const left = hostPos.left + window.scrollX - tooltipPos.width - 10;

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);

    // Adiciona a seta
    const arrow = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltipElement, arrow);

    this.renderer.setStyle(arrow, 'position', 'absolute');
    this.renderer.setStyle(arrow, 'top', '50%');
    this.renderer.setStyle(arrow, 'right', '-10px');
    this.renderer.setStyle(arrow, 'width', '0');
    this.renderer.setStyle(arrow, 'height', '0');
    this.renderer.setStyle(arrow, 'borderTop', '5px solid transparent');
    this.renderer.setStyle(arrow, 'borderBottom', '5px solid transparent');
    this.renderer.setStyle(arrow, 'borderLeft', '10px solid black');
    this.renderer.setStyle(arrow, 'transform', 'translateY(-50%)');
  }

  hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = undefined;
    }
  }
}
