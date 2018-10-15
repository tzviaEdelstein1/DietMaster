import { TestBed, inject } from '@angular/core/testing';

import { ExercizeService } from './exercize.service';

describe('ExercizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercizeService]
    });
  });

  it('should be created', inject([ExercizeService], (service: ExercizeService) => {
    expect(service).toBeTruthy();
  }));
});
