import { Component, ViewChild } from '@angular/core';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(TesteComponent) tourComponent!: TesteComponent;
  title = 'walkthrough';
  highlight = '';
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

  constructor() {}

  startTour() {
    console.log('chamou');
    this.tourComponent.startTour();
  }
}
