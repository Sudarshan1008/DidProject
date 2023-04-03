import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CorporatePortfolioComponent } from './portfolio/corporate-portfolio/corporate-portfolio.component';
import { OurPortfolioComponent } from './portfolio/our-portfolio/our-portfolio.component';
import { ResidentialPortfolioComponent } from './portfolio/residential-portfolio/residential-portfolio.component';
import { BuildingComponent } from './services/building/building.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { OfficeComponent } from './services/office/office.component';
import { PreFabComponent } from './services/pre-fab/pre-fab.component';
import { ResidentialComponent } from './services/residential/residential.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CorporatePortfolioComponent,
    OurPortfolioComponent,
    ResidentialPortfolioComponent,
    BuildingComponent,
    CommercialComponent,
    OfficeComponent,
    PreFabComponent,
    ResidentialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
