import { Component } from '@angular/core';
import { AngularGuiderService } from 'angular-guider';

@Component({
  selector: 'app-walkthroughcustom',
  templateUrl: './walkthroughcustom.component.html',
  styleUrls: ['./walkthroughcustom.component.css'],
})
export class WalkthroughcustomComponent {
  constructor(private guiderService: AngularGuiderService) {}

  ngOnInit(): void {
    // Set up guider steps
    const guideSteps = [
      {
        elementId: 'my-example-step1',
        message: `
        <div style="width: 500px">
          <h2 style="color: #dd1b16">Title</h2>
          <p>
            This is the first step.
          </p>
        </div>`,
        clickable: true,
        hideButtons: true,
        disableShadedArea: false,
        borderColor: '#ff0000',
      },
      {
        elementId: 'my-example-step2',
        message: 'This is the second step.',
        clickable: true,
        hideButtons: true,
      },
      // Add more steps as needed
    ];

    // Initialize guider steps
    this.guiderService.setSteps(guideSteps);
  }

  // Start the guider
  startGuide(): void {
    this.guiderService.startGuide();
  }
}
