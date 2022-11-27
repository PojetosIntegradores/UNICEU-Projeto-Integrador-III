import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderEnum } from './folder.enum';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild('avaliacoesTemplate', { static:true }) avaliacoesTemplate:TemplateRef<any>;
  @ViewChild('carrosTemplate', { static:true }) carrosTemplate:TemplateRef<any>;
  @ViewChild('favoritosTemplate', { static:true }) favoritosTemplate:TemplateRef<any>;
  @ViewChild('mecanicasTemplate', { static:true }) mecanicasTemplate:TemplateRef<any>;
  @ViewChild('procedimentosTemplate', { static:true }) procedimentosTemplate:TemplateRef<any>;
  @ViewChild('reclamacoesTemplate', { static:true }) reclamacoesTemplate:TemplateRef<any>;
  urlImage:string = '../../assets/img/fundo_de_tela_app.jpg'

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  selecionaTela(tela:string) {
    switch (tela) {
      case FolderEnum.AVALIACOES:
        return this.avaliacoesTemplate;
      case FolderEnum.AUTOS:
        return this.carrosTemplate;
      case FolderEnum.FAVORITOS:
        return this.favoritosTemplate;
      case FolderEnum.MECANICAS:
        return this.mecanicasTemplate;
      case FolderEnum.PORCEDIMENTOS:
        return this.procedimentosTemplate;
      default:
        return this.reclamacoesTemplate;
    }
  }

}
