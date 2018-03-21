import { TestBed, inject } from '@angular/core/testing';

import { LoggedinguardService } from './loggedinguard.service';

describe('LoggedinguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedinguardService]
    });
  });

  it('should be created', inject([LoggedinguardService], (service: LoggedinguardService) => {
    expect(service).toBeTruthy();
  }));
});
