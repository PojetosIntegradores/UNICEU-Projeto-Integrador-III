import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-mecanicas-lista',
  templateUrl: './mecanicas-lista.component.html',
  styleUrls: ['./mecanicas-lista.component.scss'],
})
export class MecanicasListaComponent implements OnInit {

  @Input() tela:string;
  @Output() setaBotao = new EventEmitter<string>();
  mecanicas:any;

  constructor(private service: CrudServiceService) { }

  ngOnInit() {
    this.service.read('mecanicas').subscribe(mecanicas =>{
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
