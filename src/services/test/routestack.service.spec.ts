import { TestBed } from '@angular/core/testing';

import { RoutestackService } from './routestack.service';

describe('RoutestackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutestackService = TestBed.get(RoutestackService);
    expect(service).toBeTruthy();
  });
});
