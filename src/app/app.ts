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
  title = 'Catálogo de Jogos';
  usuarioLogado = false;

  jogos = [
    {
      id: 1,
      nome: 'Minecraft',
      imagem: '/imagens/minecraft.jpg',
      descricao: 'Jogo de construção e sobrevivência em mundo aberto com blocos infinitos.',
      disponivel: true,
      nota: 9.0,
      favorito: false
    },
    {
      id: 2,
      nome: 'Free Fire',
      imagem: '/imagens/ff.jpg',
      descricao: 'Battle royale mobile com partidas rápidas e personagens únicos.',
      disponivel: true,
      nota: 8.5,
      favorito: false
    },
    {
      id: 3,
      nome: 'Fortnite',
      imagem: '/imagens/fortnite.jpg',
      descricao: 'Battle royale com construção, eventos ao vivo e modos criativos.',
      disponivel: false,
      nota: 8.8,
      favorito: false
    },
    {
      id: 4,
      nome: 'Clash Royale',
      imagem: '/imagens/clash.png',
      descricao: 'Jogo de estratégia em tempo real com cartas e batalhas de arena.',
      disponivel: true,
      nota: 8.2,
      favorito: false
    },
    {
      id: 5,
      nome: 'Call of Duty',
      imagem: '/imagens/cs.png',
      descricao: 'FPS de guerra com campanhas intensas e multiplayer competitivo.',
      disponivel: true,
      nota: 9.2,
      favorito: false
    },
    {
      id: 6,
      nome: 'Subway Surf',
      imagem: '/imagens/subway.avif',
      descricao: 'Corrida infinita desviando de obstáculos e coletando moedas.',
      disponivel: false,
      nota: 7.8,
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