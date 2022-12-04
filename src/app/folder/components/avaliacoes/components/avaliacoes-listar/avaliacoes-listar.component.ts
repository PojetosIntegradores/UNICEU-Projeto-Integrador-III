import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-avaliacoes-listar',
  templateUrl: './avaliacoes-listar.component.html',
  styleUrls: ['./avaliacoes-listar.component.scss'],
})
export class AvaliacoesListarComponent implements OnInit {

  @Input() carrosTela:string;
  @Output() setaBotao = new EventEmitter<string>();
  carros:any;

  constructor(private service: CrudServiceService) { }

  ngOnInit() {
    this.service.read('avaliacoes').subscribe(carros =>{
      this.carros = carros;
      console.log(carros);
    })
  }

  setaTela(event?: any) {
    console.log(event);
    this.service.id = event;
    this.setaBotao.emit(CrudEnum.DETALHE);
  }

}
