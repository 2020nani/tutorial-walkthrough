import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BdcWalkModule } from 'bdc-walkthrough';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WalkthroughcustomComponent } from './walkthroughcustom/walkthroughcustom.component';
import { TesteComponent } from './teste/teste.component';
import { AngularGuiderService } from 'angular-guider';
import { MyTooltipDirective } from './my-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WalkthroughcustomComponent,
    TesteComponent,
    MyTooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BdcWalkModule,
  ],
  exports: [BdcWalkModule],
  providers: [AngularGuiderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
