import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SecIntroComponent } from './components/sec-intro/sec-intro.component';
import { SecBoxesComponent } from './components/sec-boxes/sec-boxes.component';
import { SecEventsComponent } from './components/sec-events/sec-events.component';
import { SecProjectsComponent } from './components/sec-projects/sec-projects.component';
import { SecStandardsComponent } from './components/sec-standards/sec-standards.component';
import { SecPartnersComponent } from './components/sec-partners/sec-partners.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecIntroComponent,
    SecBoxesComponent,
    SecEventsComponent,
    SecProjectsComponent,
    SecStandardsComponent,
    SecPartnersComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
