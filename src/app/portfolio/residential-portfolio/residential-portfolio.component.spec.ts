import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialPortfolioComponent } from './residential-portfolio.component';

describe('ResidentialPortfolioComponent', () => {
  let component: ResidentialPortfolioComponent;
  let fixture: ComponentFixture<ResidentialPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
