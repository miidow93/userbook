import { TestBed, inject } from '@angular/core/testing';

import { MongoConfigService } from './mongo-config.service';

describe('MongoConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoConfigService]
    });
  });

  it('should be created', inject([MongoConfigService], (service: MongoConfigService) => {
    expect(service).toBeTruthy();
  }));
});
