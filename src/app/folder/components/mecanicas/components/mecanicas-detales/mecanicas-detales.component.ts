import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-mecanicas-detales',
  templateUrl: './mecanicas-detales.component.html',
  styleUrls: ['./mecanicas-detales.component.scss'],
})
export class MecanicasDetalesComponent implements OnInit {

  mecanica: any;
  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }
  // O sinal de `+` converte para number
  ngOnInit(): void {
    const id = this.service.id;
    this.service.readById(id, 'mecanicas').subscribe(mecanica => {
      this.mecanica = mecanica
    });
  }

  updatePoduct(): void {
    this.service.update(this.mecanica, 'mecanicas').subscribe(() => {
      this.service.presentToast('top', 'Atulizado com sucesso!');
      this.retorno.emit(CrudEnum.LISTA);
    });
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }
}
