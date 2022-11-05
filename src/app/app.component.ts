import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Carros', url: '/folder/Carros', icon: 'car' },
    { title: 'Mecanicas', url: '/folder/Mecanicas', icon: 'construct' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'star' },
    { title: 'Procedimentos', url: '/folder/Procedimentos', icon: 'hammer' },
    { title: 'Avaliações', url: '/folder/Avaliacoes', icon: 'star-half' },
    { title: 'Reclamações', url: '/folder/Reclamacoes', icon: 'warning' },
  ];
  public labels = [
    'Economia', 
    'Confiança', 
    'Iformação', 
    'Qualidade'
  ];
  
  constructor() {}
}
