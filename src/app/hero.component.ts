import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroDetailsComponent} from './hero-details.component'
import {HeroService} from './hero.service'
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
   templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers:[HeroService]
 
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes = [];
  selectedHero:Hero;

  constructor(private router: Router, private heroService:HeroService)  {    
    //constructor( private heroService:HeroService)  {    
  }
  onSelected(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes():void{
   this.heroService.getHeroes().then(heroes=>this.heroes = heroes );
  }
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}


