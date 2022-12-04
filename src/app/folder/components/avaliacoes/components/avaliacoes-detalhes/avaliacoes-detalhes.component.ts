import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-avaliacoes-detalhes',
  templateUrl: './avaliacoes-detalhes.component.html',
  styleUrls: ['./avaliacoes-detalhes.component.scss'],
})
export class AvaliacoesDetalhesComponent implements OnInit {


  carro:any;
  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }
  // O sinal de `+` converte para number
  ngOnInit(): void {
    const id = this.service.id;
    this.service.readById(id, 'avaliacoes').subscribe(carro => {
    this.carro = carro
  });
  }

  updatePoduct(): void{
    this.service.update(this.carro, 'avaliacoes').subscribe(() =>{
      this.service.presentToast('top','Atulizado com sucesso!');
      this.retorno.emit(CrudEnum.LISTA);
    });
  }

  cancel(): void {
    this.retorno.emit(CrudEnum.LISTA);
  }

}
