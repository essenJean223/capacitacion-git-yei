import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //propiedades
  hero: Hero = {
    id: 1,
    name: 'Windostorm'
  }

  public heroes: Hero[] = [];
  selectedHero?:Hero;

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
  ) { }

  //lifecycle hook: despues de crear un componente

  ngOnInit(): void {
    this.getHeroes();
  }

  //click event
  onSelect(hero:Hero){
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(
      heroes=>{
        this.heroes=heroes;
      }
    );
  }

}
