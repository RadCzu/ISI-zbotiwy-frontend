import { TestBed } from '@angular/core/testing';

import { SoundpiecesService } from './soundpieces.service';

describe('SoundpiecesService', () => {
  let service: SoundpiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundpiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
