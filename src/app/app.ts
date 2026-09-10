import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { ListComponent } from './components/list/list';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ListComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Vaguinha - Catálogo';
  produtos = [
    {
      id: 1,
      nome: 'Notebook Ultra',
      imagem: 'https://via.placeholder.com/300x200/1a1a2e/ffffff?text=Notebook',
      descricao: 'Notebook com processador i7, 16GB RAM e SSD 512GB.',
      disponivel: true,
      nota: 4.8,
      favorito: false
    },
    {
      id: 2,
      nome: 'Smartphone X',
      imagem: 'https://via.placeholder.com/300x200/2d2d44/ffffff?text=Smartphone',
      descricao: 'Smartphone com tela 6.5", câmera tripla e bateria de 5000mAh.',
      disponivel: false,
      nota: 4.2,
      favorito: false
    },
    {
      id: 3,
      nome: 'Fone Bluetooth',
      imagem: 'https://via.placeholder.com/300x200/3a3a5c/ffffff?text=Fone',
      descricao: 'Fone de ouvido sem fio com cancelamento de ruído.',
      disponivel: true,
      nota: 4.5,
      favorito: false
    }
  ];
}