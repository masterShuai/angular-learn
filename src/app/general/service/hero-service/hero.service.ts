import { Injectable } from '@angular/core';
import {HEROES} from '../../mock/heroes-mock/heroes-mock';
import {Hero} from '../../model/hero/hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    /*
    return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
    });
    */
  }
}
