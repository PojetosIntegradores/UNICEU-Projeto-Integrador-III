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
  carros:any;
  mecanicas:any;

  constructor(private service: CrudServiceService) { }

  ngOnInit(): void {
    this.service.read('carros').subscribe(carros =>{
      this.carros = carros;
      console.log(carros);
    });
    this.service.read('mecanicas').subscribe(mecanicas =>{
      this.mecanicas = mecanicas;
      console.log(mecanicas);
    });
  }

  product: any = {
    name: '',
    mecanica: '',
    carro: '',
    preco: '',
    descricao: '',
  }

  createPoduct(): void {
    this.service.create(this.product, 'procedimentos').subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!');
      this.retorno.emit(CrudEnum.LISTA);
    });
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }

}
