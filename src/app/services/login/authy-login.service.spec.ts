import { TestBed } from '@angular/core/testing';

import { AuthyLoginService } from './authy-login.service';

describe('AuthyLoginService', () => {
  let service: AuthyLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthyLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
