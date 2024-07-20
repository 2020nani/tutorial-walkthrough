import { Component } from '@angular/core';
import { BdcWalkService } from 'bdc-walkthrough';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private bdcWalkService: BdcWalkService) {}
  teste: string[] = ['step1', 'step2'];
  state: string = 'step1';
  index = 0;

  upArray() {
    if (this.index === 1) {
      localStorage.setItem('showWalk', 'false');
      this.index = 0;
      return;
    }
    this.index = this.index + 1;
    this.state = this.teste[this.index];
  }

  reset() {
    // reset all tasks
    this.bdcWalkService.reset('example1');
  }

  isShowWalk(): boolean {
    return localStorage.getItem('showWalk') === 'true' ? true : false;
  }
}
