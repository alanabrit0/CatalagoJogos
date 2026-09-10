import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() item: any;
  @Output() favoritar = new EventEmitter<any>();

  mostrarDetalhes = false;

  toggleDetalhes() {
    this.mostrarDetalhes = !this.mostrarDetalhes;
  }

  onFavoritar() {
    this.favoritar.emit(this.item);
  }

  isIndisponivel(): boolean {
    return !this.item?.disponivel;
  }
}