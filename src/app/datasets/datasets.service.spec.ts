/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatasetsService } from './datasets.service';

describe('Service: Datasets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasetsService]
    });
  });

  it('should ...', inject([DatasetsService], (service: DatasetsService) => {
    expect(service).toBeTruthy();
  }));
});
