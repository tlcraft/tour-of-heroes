import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
  @Input() hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { 
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
