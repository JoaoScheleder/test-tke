import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsCarrousel } from './highlights-carrousel';

describe('HighlightsCarrousel', () => {
  let component: HighlightsCarrousel;
  let fixture: ComponentFixture<HighlightsCarrousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsCarrousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightsCarrousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
