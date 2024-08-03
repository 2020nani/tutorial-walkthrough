import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent {
  @Input() steps: { title: string; content: string; selector: string }[] = [];
  showTour = false;
  currentStep = 0;
  highlightedElement: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  get currentStepTitle() {
    return this.steps[this.currentStep]?.title || '';
  }

  get currentStepContent() {
    return this.steps[this.currentStep]?.content || '';
  }

  get currentStepStyle() {
    const element = document.querySelector(
      this.steps[this.currentStep].selector
    ) as HTMLElement;
    if (element) {
      const rect = element.getBoundingClientRect();
      // Remove previous highlight
      if (this.highlightedElement) {
        this.renderer.removeClass(this.highlightedElement, 'highlight');
        this.renderer.removeClass(
          this.highlightedElement,
          'disable-interaction'
        );
      }
      this.highlightedElement = element;
      this.renderer.addClass(this.highlightedElement, 'highlight');
      this.renderer.addClass(this.highlightedElement, 'disable-interaction');
      // Calculate position for popup
      return {
        position: 'absolute',
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        background: '#fff',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: 'none', // Remove shadow from popup
      };
    }
    return {};
  }

  startTour() {
    this.showTour = true;
  }

  nextStep() {
    this.currentStep++;
    if (this.currentStep >= this.steps.length) {
      this.showTour = false;
      this.currentStep = 0;
      if (this.highlightedElement) {
        this.renderer.removeClass(this.highlightedElement, 'highlight');
      }
    }
  }
}
