import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePortfolioComponent } from './corporate-portfolio.component';

describe('CorporatePortfolioComponent', () => {
  let component: CorporatePortfolioComponent;
  let fixture: ComponentFixture<CorporatePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatePortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporatePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
