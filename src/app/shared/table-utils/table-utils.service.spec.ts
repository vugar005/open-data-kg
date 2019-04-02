import { TestBed } from '@angular/core/testing';

import { TableUtilsService } from './table-utils.service';

describe('TableUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableUtilsService = TestBed.get(TableUtilsService);
    expect(service).toBeTruthy();
  });
});
