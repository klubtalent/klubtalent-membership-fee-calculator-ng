import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SportsSelectionComponent} from './sports-selection.component';

describe('SportsSelectionComponent', () => {
  let component: SportsSelectionComponent;
  let fixture: ComponentFixture<SportsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsSelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
