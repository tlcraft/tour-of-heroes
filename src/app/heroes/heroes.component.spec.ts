import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { HeroesComponent } from './heroes.component';
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroesComponent ],
      providers: [provideHttpClient(withXhr())]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
