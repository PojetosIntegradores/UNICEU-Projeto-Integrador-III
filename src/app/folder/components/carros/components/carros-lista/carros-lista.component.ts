import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.scss'],
})
export class CarrosListaComponent implements OnInit {
  @Input() carrosTela:string;
  @Output() setaBotao = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setaTela() {
    this.setaBotao.emit(CrudEnum.DETALHE);
  }

}
