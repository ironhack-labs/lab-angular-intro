import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { MainComponent } from './COMPONENTES/main/main.component';
import { HeroComponent } from './COMPONENTES/main/hero/hero.component';
import { ArticleComponent } from './COMPONENTES/main/article/article.component';
import { EventComponent } from './COMPONENTES/main/event/event.component';
import { ProjectComponent } from './COMPONENTES/main/project/project.component';
import { PartnersComponent } from './COMPONENTES/main/partners/partners.component';
import { FooterComponent } from './COMPONENTES/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HeroComponent,
    ArticleComponent,
    EventComponent,
    ProjectComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
