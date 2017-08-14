import {Component,OnInit} from '@angular/core';


import {HeroService} from './hero.service'
import {Hero} from './hero'

@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
     
})

export class DashboardComponent implements OnInit{
    ngOnInit(): void {
        this.heroService.getHeroes().then(h=>this.heroes = h.slice(1, 5));
    }
    heroes: Hero[];
    constructor(private heroService:HeroService
               
                ){

    }

}