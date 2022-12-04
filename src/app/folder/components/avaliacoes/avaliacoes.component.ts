import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CrudEnum } from '../../folder.enum';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss'],
})
export class AvaliacoesComponent implements OnInit {

  public carrosTela:string;
  public carrosBotao:string;
  public carrosDetalhe:string = CrudEnum.DETALHE;

  @ViewChild('listaTemplate', { static:true }) listaTemplate:TemplateRef<any>;
  @ViewChild('inserirTemplate', { static:true }) inserirTemplate:TemplateRef<any>;
  @ViewChild('detalhesTemplate', { static:true }) detalhesTemplate:TemplateRef<any>;

  ngOnInit() {
    this.selecionaTela(CrudEnum.LISTA);
  }

  selecionaTela(tela:string) {
    console.log(tela);
    switch (tela) {
      case CrudEnum.INSERIR:
        this.carrosTela = CrudEnum.INSERIR;
        this.carrosBotao = CrudEnum.LISTA;
        break;
      case CrudEnum.DETALHE:
        this.carrosTela = CrudEnum.DETALHE
        this.carrosBotao = CrudEnum.LISTA;
        break;
      case CrudEnum.LISTA: default:
        this.carrosTela = CrudEnum.LISTA;
        this.carrosBotao = CrudEnum.INSERIR;
        break;
    }
  }

  setaTemplate(tela:string) {
    switch (tela) {
      case CrudEnum.INSERIR:
        return this.inserirTemplate; 
      case CrudEnum.DETALHE:
        return this.detalhesTemplate;
      case CrudEnum.LISTA: default:
        return this.listaTemplate;
    }
  }

  setaTela(tela:string) {
    this.selecionaTela(tela);
  }

}
