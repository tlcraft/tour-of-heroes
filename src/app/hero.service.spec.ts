import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClient(withXhr())]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.inject(HeroService);
    expect(service).toBeTruthy();
  });
});
