import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-avaliacoes-inserir',
  templateUrl: './avaliacoes-inserir.component.html',
  styleUrls: ['./avaliacoes-inserir.component.scss'],
})
export class AvaliacoesInserirComponent implements OnInit {

  @Output() retorno = new EventEmitter<string>();
  mecanicas:any;
  procedimentos:any;

  constructor(private service: CrudServiceService) { }

  product: any = {
    mecanica: '',
    procedimento: '',
    nota: '',
    descricao: '',
  }

  ngOnInit(): void {
    this.service.read('procedimentos').subscribe(procedimentos =>{
      this.procedimentos = procedimentos;
      console.log(procedimentos);
    });
    this.service.read('mecanicas').subscribe(mecanicas =>{
      this.mecanicas = mecanicas;
      console.log(mecanicas);
    });
  }

  createPoduct(): void {
    this.service.create(this.product, 'avaliacoes').subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!');
      this.retorno.emit(CrudEnum.LISTA);
    })
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }
}
