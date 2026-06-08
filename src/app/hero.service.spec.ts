import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { HeroService } from './hero.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClientTesting]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.inject(HeroService);
    expect(service).toBeTruthy();
  });
});
