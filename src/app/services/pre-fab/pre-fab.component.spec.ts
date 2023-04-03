import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFabComponent } from './pre-fab.component';

describe('PreFabComponent', () => {
  let component: PreFabComponent;
  let fixture: ComponentFixture<PreFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreFabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
