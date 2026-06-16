import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { FavoriteHeroService } from './favorite-hero.service';

describe('TestserviceService', () => {
  let service: FavoriteHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
