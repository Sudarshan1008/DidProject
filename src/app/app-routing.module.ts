import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CorporatePortfolioComponent } from './portfolio/corporate-portfolio/corporate-portfolio.component';
import { OurPortfolioComponent } from './portfolio/our-portfolio/our-portfolio.component';
import { ResidentialPortfolioComponent } from './portfolio/residential-portfolio/residential-portfolio.component';
import { BuildingComponent } from './services/building/building.component';
import { CommercialComponent } from './services/commercial/commercial.component';
import { OfficeComponent } from './services/office/office.component';
import { PreFabComponent } from './services/pre-fab/pre-fab.component';
import { ResidentialComponent } from './services/residential/residential.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'corporate',component:CorporatePortfolioComponent},
  {path:'our-portfolio',component:OurPortfolioComponent},
  {path:'residentail-portfolio',component:ResidentialPortfolioComponent},
  {path:'building',component:BuildingComponent},
  {path:'commercial',component:CommercialComponent},
  {path:'office',component:OfficeComponent},
  {path:'pre-fab',component:PreFabComponent},
  {path:'residentail',component:ResidentialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
