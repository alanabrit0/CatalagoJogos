import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() usuarioLogado = false;
  @Input() secaoAtiva = 'inicio';
  @Output() loginToggle = new EventEmitter<void>();
  @Output() navegar = new EventEmitter<string>();

  onLoginToggle() {
    this.loginToggle.emit();
  }

  onNavegar(secao: string) {
    this.navegar.emit(secao);
  }
}