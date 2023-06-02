import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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

  heroes = HEROES;
  selectedHero?:Hero;

  constructor() { }

  //lifecycle hook: despues de crear un componente

  ngOnInit(): void {
  }

  //click event
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

}
