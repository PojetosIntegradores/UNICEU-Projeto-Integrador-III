import { Component, EventEmitter, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-procedimentos-inserir',
  templateUrl: './procedimentos-inserir.component.html',
  styleUrls: ['./procedimentos-inserir.component.scss'],
})
export class ProcedimentosInserirComponent {

  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }

  product: any = {
    name: '',
    mecanica: '',
    carro: '',
    preco: '',
    descricao: '',
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
