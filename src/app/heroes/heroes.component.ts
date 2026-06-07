import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-heroes',
    imports: [RouterLink],
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  private heroService = inject(HeroService);

  private heroesFromApi = toSignal(this.heroService.getHeroes(), { initialValue: [] as Hero[] });
  private localHeroes = signal<Hero[] | null>(null);
  heroes = computed(() => this.localHeroes() ?? this.heroesFromApi());

  add(name: string): void {
    const trimmedName = name.trim();
    if (!trimmedName) { return; }
    this.heroService.addHero({ name: trimmedName } as Hero )
      .subscribe(hero => {
        this.localHeroes.set([...this.heroes(), hero]);
      });
  }

  delete(hero: Hero): void {
    const remainingHeroes = this.heroes().filter(h => h.id !== hero.id);
    this.localHeroes.set(remainingHeroes);
    this.heroService.deleteHero(hero).subscribe();
  }
}
