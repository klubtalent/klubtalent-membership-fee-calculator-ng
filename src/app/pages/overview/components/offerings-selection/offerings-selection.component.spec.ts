import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OfferingsSelectionComponent} from './offerings-selection.component';

describe('OfferingsSelectionComponent', () => {
  let component: OfferingsSelectionComponent;
  let fixture: ComponentFixture<OfferingsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferingsSelectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
