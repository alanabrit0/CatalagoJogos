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
  title = 'Vaguinha - Catálogo de Jogos';
  usuarioLogado = false;
  jogos = [
    {
      id: 1,
      nome: 'The Witcher 3: Wild Hunt',
      imagem: 'https://via.placeholder.com/300x200/1a1a2e/ffffff?text=Witcher+3',
      descricao: 'RPG de mundo aberto com uma história épica e decisões impactantes.',
      disponivel: true,
      nota: 9.5,
      favorito: false
    },
    {
      id: 2,
      nome: 'Cyberpunk 2077',
      imagem: 'https://via.placeholder.com/300x200/2d2d44/ffffff?text=Cyberpunk',
      descricao: 'Futuro distópico em Night City, com liberdade para escolher seu caminho.',
      disponivel: false,
      nota: 7.2,
      favorito: false
    },
    {
      id: 3,
      nome: 'Hollow Knight',
      imagem: 'https://via.placeholder.com/300x200/3a3a5c/ffffff?text=Hollow+Knight',
      descricao: 'Metroidvania desafiador com arte deslumbrante e trilha sonora envolvente.',
      disponivel: true,
      nota: 9.0,
      favorito: false
    }
  ];

  toggleLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  toggleFavorito(jogo: any) {
    jogo.favorito = !jogo.favorito;
  }
}
