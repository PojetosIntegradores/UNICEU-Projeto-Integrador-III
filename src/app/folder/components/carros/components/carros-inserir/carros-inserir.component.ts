import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-carros-inserir',
  templateUrl: './carros-inserir.component.html',
  styleUrls: ['./carros-inserir.component.scss'],
})
export class CarrosInserirComponent implements OnInit {

  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }

  product: any = {
    name: '',
    modelo: '',
    ano: '',
    descricao: '',
    imgLink: ''
  }

  ngOnInit(): void {

  }

  createPoduct(): void {
    this.service.create(this.product, 'carros').subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!');
      this.retorno.emit(CrudEnum.LISTA);
    })
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }
}
