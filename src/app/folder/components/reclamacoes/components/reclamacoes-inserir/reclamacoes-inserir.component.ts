import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-reclamacoes-inserir',
  templateUrl: './reclamacoes-inserir.component.html',
  styleUrls: ['./reclamacoes-inserir.component.scss'],
})
export class ReclamacoesInserirComponent implements OnInit {

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
    this.service.read('mecanicas').subscribe(mecanicas =>{
      this.mecanicas = mecanicas;
      console.log(mecanicas);
    });
    this.service.read('procedimentos').subscribe(procedimentos =>{
      this.procedimentos = procedimentos;
      console.log(procedimentos);
    });
  }

  createPoduct(): void {
    this.service.create(this.product, 'reclamacoes').subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!');
      this.retorno.emit(CrudEnum.LISTA);
    })
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }
}
