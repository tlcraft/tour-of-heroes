import { Component, inject } from '@angular/core';
import { FavoriteHeroService } from '../favorite-hero.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorite-hero',
  imports: [AsyncPipe],
  templateUrl: './favorite-hero.component.html',
  styleUrls: ['./favorite-hero.component.scss'],
})
export class FavoriteHeroComponent {
  favoriteHeroService = inject(FavoriteHeroService);
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  private heroService = inject(HeroService);
  
  constructor() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getFavoriteHero() {
    return this.favoriteHeroService.getFavoriteHeroName();
  }

  setFavoriteHero(name: string) {
    this.favoriteHeroService.setFavoriteHeroName(name);
  }

  getNumberOfTimesSet() {
    return this.favoriteHeroService.getNumberOfTimesSet();
  }
}
