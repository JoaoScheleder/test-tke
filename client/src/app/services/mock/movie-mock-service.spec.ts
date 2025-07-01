import { TestBed } from '@angular/core/testing';

import { MovieMockService } from './movie-mock-service';

describe('MovieMockService', () => {
  let service: MovieMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
