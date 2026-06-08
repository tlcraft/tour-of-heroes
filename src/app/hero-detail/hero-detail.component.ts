import { Component, computed, inject, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap, map, filter } from 'rxjs/operators';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hero-detail',
    imports: [UpperCasePipe, CommonModule, FormsModule],
    templateUrl: './hero-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private heroService = inject(HeroService);
  
  editableHero = signal<Hero | null>(null);
  name = computed(() => this.hero()?.name ?? '');

  private readonly heroId = toSignal(this.route.paramMap.pipe(
      map(p => Number(p.get('id'))),
      filter(id => Number.isFinite(id))
    ),
    { initialValue: 0 }
  );

  readonly hero = toSignal(
    toObservable(this.heroId).pipe(
      filter((id) => id > 0),
      switchMap((id) => this.heroService.getHero(id))
    ),
    { initialValue: undefined }
  );

  constructor(){ 
    effect(() => {
      const hero = this.hero();
      this.editableHero.set(hero ? { ...hero } : null);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const hero = this.editableHero();
    if (!hero) return;
    this.heroService.updateHero(hero)
      .subscribe(() => this.goBack());
  }

  updateName(name: string): void {
    this.editableHero.update(hero => hero ? { ...hero, name } : null);
  }
}
