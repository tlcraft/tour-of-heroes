import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { HeroSearchComponent } from './hero-search.component';
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroSearchComponent ],
      providers: [provideHttpClient(withXhr())]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
