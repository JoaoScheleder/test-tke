import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListCarrousel } from './movies-list-carrousel';

describe('MoviesListCarrousel', () => {
  let component: MoviesListCarrousel;
  let fixture: ComponentFixture<MoviesListCarrousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesListCarrousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesListCarrousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
