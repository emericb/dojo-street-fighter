import { Component } from '@angular/core';
import { Fighter } from 'src/models/Fighter';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent {
  fighter1: Fighter = new Fighter("Ryu",100,70,50,"https://www.smashbros.com/wiiu-3ds/images/character/ryu/main.png")
  fighter2: Fighter = new Fighter("Ken",100,70,50,"https://static.wikia.nocookie.net/heroess/images/f/f6/Ken_SSBU.png/revision/latest?cb=20190326015641&path-prefix=es")
}
