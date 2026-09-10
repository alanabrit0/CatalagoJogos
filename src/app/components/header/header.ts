import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() usuarioLogado = false;
  @Output() loginToggle = new EventEmitter<void>();

  onLoginToggle() {
    this.loginToggle.emit();
  }
}