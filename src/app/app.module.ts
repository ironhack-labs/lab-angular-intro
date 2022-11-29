import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SecIntroComponent } from './components/sec-intro/sec-intro.component';
import { SecBoxesComponent } from './components/sec-boxes/sec-boxes.component';
import { SecEventsComponent } from './components/sec-events/sec-events.component';
import { SecProjectsComponent } from './components/sec-projects/sec-projects.component';
import { SecStandardsComponent } from './components/sec-standards/sec-standards.component';
import { SecPartnersComponent } from './components/sec-partners/sec-partners.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    WrapperComponent,
    HeaderComponent,
    MainComponent,
    SecIntroComponent,
    SecBoxesComponent,
    SecEventsComponent,
    SecProjectsComponent,
    SecStandardsComponent,
    SecPartnersComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
