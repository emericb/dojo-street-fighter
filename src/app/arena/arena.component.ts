import { Component, Input } from '@angular/core';
import { Fighter } from 'src/models/Fighter';


@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {
  @Input() fighter1!:Fighter;
  @Input() fighter2!:Fighter

  attack(fighter:Fighter){
    let damage = Math.random()*fighter.power
  }
}
