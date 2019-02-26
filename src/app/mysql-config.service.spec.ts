import { TestBed, inject } from '@angular/core/testing';

import { MysqlConfigService } from './mysql-config.service';

describe('MysqlConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlConfigService]
    });
  });

  it('should be created', inject([MysqlConfigService], (service: MysqlConfigService) => {
    expect(service).toBeTruthy();
  }));
});
