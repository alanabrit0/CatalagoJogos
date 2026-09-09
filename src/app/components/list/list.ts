import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponents } from '../card/card.components';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameCardComponents],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class GameListComponent {
  // dados serão adicionados depois
}