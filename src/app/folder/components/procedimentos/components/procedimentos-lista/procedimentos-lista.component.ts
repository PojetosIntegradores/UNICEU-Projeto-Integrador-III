import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-procedimentos-lista',
  templateUrl: './procedimentos-lista.component.html',
  styleUrls: ['./procedimentos-lista.component.scss'],
})
export class ProcedimentosListaComponent implements OnInit {

  @Input() tela:string;
  @Output() setaBotao = new EventEmitter<string>();
  mecanicas:any;

  constructor(private service: CrudServiceService) { }

  ngOnInit() {
    this.service.read('procedimentos').subscribe(mecanicas =>{
      this.mecanicas = mecanicas;
      console.log(mecanicas);
    })
  }

  setaTela(event?: any) {
    console.log(event);
    this.service.id = event;
    this.setaBotao.emit(CrudEnum.DETALHE);
  }
}
