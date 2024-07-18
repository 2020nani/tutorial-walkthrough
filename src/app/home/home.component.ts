import { Component } from '@angular/core';
import { BdcWalkService } from 'bdc-walkthrough';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private bdcWalkService: BdcWalkService) {}

  reset() {
    // reset all tasks
    this.bdcWalkService.reset('example1');
  }

  delete() {
    console.log('teste');
  }
}
