import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it  } from 'vitest';
import { FavoriteHeroComponent } from './favorite-hero.component';

describe('FavoriteHeroComponent', () => {
  let component: FavoriteHeroComponent;
  let fixture: ComponentFixture<FavoriteHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
