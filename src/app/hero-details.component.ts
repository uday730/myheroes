import {Component,Input ,OnInit } from "@angular/core";
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component ({
selector:'hero-details',
templateUrl:'hero-details.component.html',
styleUrls:['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit
{
    ngOnInit(): void {
        this.route.paramMap
        .switchMap((parms:ParamMap)=>this.heroService.getHero(+parms.get('id')))
        .subscribe(he=>this.hero=he);
    }
    @Input() hero: Hero;
    constructor(private heroService: HeroService,
                private route:ActivatedRoute,
                private location:Location
                ){}

    goBack(): void {
             this.location.back();
}
}