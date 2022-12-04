import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-procedimentos-inserir',
  templateUrl: './procedimentos-inserir.component.html',
  styleUrls: ['./procedimentos-inserir.component.scss'],
})
export class ProcedimentosInserirComponent implements OnInit {

  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }

  product: any = {
    name: '',
    endereco: '',
    procedimentosRealizados: '',
    descricao: '',
    imgLink: ''
  }

  ngOnInit(): void {

  }

  createPoduct(): void {
    this.service.create(this.product, 'mecanicas').subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!');
      this.retorno.emit(CrudEnum.LISTA);
    })
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }

}
