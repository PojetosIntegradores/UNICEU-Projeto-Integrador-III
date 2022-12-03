import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';

@Component({
  selector: 'app-mecanicas-lista',
  templateUrl: './mecanicas-lista.component.html',
  styleUrls: ['./mecanicas-lista.component.scss'],
})
export class MecanicasListaComponent implements OnInit {

  @Input() tela:string;
  @Output() setaBotao = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setaTela() {
    this.setaBotao.emit(CrudEnum.DETALHE);
  }
}
