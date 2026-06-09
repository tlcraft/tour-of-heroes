import { Component, inject } from '@angular/core';
import { FavoriteHeroService } from '../favorite-hero.service';

@Component({
  selector: 'app-favorite-hero',
  templateUrl: './favorite-hero.component.html',
  styleUrls: ['./favorite-hero.component.scss'],
})
export class FavoriteHeroComponent {
  favoriteHeroService = inject(FavoriteHeroService);

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
