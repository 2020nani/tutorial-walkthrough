import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent {
  showTour = false;
  currentStep = 0;
  highlightedElement: HTMLElement | null = null;
  steps = [
    {
      title: 'Bem-vindo!',
      content: 'Este é o primeiro passo do tour.',
      selector: '#step1',
    },
    {
      title: 'Próximo passo',
      content: 'Este é o segundo passo do tour.',
      selector: '#step2',
    },
  ];

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  get currentStepTitle() {
    return this.steps[this.currentStep].title;
  }

  get currentStepContent() {
    return this.steps[this.currentStep].content;
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
      }
      this.highlightedElement = element;
      this.renderer.addClass(this.highlightedElement, 'highlight');
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
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
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
