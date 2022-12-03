import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-carros-detalhes',
  templateUrl: './carros-detalhes.component.html',
  styleUrls: ['./carros-detalhes.component.scss'],
})
export class CarrosDetalhesComponent implements OnInit {

  carro:any;
  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }
  // O sinal de `+` converte para number
  ngOnInit(): void {
    const id = this.service.id;
    this.service.readById(id, 'carros').subscribe(carro => {
    this.carro = carro
  });
  }

  updatePoduct(): void{
    this.service.update(this.carro, 'carros').subscribe(() =>{
      this.service.presentToast('top','Atulizado com sucesso!');
      this.retorno.emit(CrudEnum.LISTA);
    });
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }
}
