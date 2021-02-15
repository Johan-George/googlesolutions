import { TestBed } from '@angular/core/testing';

import { LevelDataInterfaceService } from './level-data-interface.service';

describe('LevelDataInterfaceService', () => {
  let service: LevelDataInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelDataInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
