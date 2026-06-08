import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.inject(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
