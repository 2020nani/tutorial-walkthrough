import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughcustomComponent } from './walkthroughcustom.component';

describe('WalkthroughcustomComponent', () => {
  let component: WalkthroughcustomComponent;
  let fixture: ComponentFixture<WalkthroughcustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkthroughcustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkthroughcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
