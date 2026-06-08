import { Service } from '@angular/core';

@Service()
export class FavoriteHeroService {
    timesFavoriteHeroSet = 0;
    favoriteHeroName: string = '';

    private increment() {
        this.timesFavoriteHeroSet++;
    }

    getNumberOfTimesSet(){
        return this.timesFavoriteHeroSet;
    }

    setFavoriteHeroName(name: string) {
        this.favoriteHeroName = name;
        this.increment();
    }

    getFavoriteHeroName() {
        return this.favoriteHeroName;
    }
}
