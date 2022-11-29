import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectSpecsComponent } from './project-specs/project-specs.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ProjectsComponent } from './projects/projects.component';
import { StandardsComponent } from './standards/standards.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    ProjectSpecsComponent,
    UpcomingEventsComponent,
    ProjectsComponent,
    StandardsComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
