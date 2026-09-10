import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {
  @Input() jogos: any[] = [];
  @Output() favoritar = new EventEmitter<any>();

  onFavoritar(jogo: any) {
    this.favoritar.emit(jogo);
  }
}