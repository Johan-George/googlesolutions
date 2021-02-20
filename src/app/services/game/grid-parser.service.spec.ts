import { TestBed } from '@angular/core/testing';

import { GridParserService } from './grid-parser.service';

describe('GridParserService', () => {
  let service: GridParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
