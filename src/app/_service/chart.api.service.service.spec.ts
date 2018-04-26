import { TestBed, inject } from '@angular/core/testing';

import { ChartApiServiceService } from './chart.api.service.service';

describe('ChartApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartApiServiceService]
    });
  });

  it('should be created', inject([ChartApiServiceService], (service: ChartApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
