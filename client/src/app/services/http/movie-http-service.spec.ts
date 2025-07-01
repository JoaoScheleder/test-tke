import { TestBed } from '@angular/core/testing';

import { MovieHTTPService } from './movie-httpservice';

describe('MovieHTTPService', () => {
  let service: MovieHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
