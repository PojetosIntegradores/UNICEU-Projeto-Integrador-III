import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudEnum } from 'src/app/folder/folder.enum';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.scss'],
})
export class CarrosListaComponent implements OnInit {
  @Input() carrosTela:string;
  @Output() setaBotao = new EventEmitter<string>();
  carros:any;

  constructor(private service: CrudServiceService) { }

  ngOnInit() {
    this.service.parametroComponet = 'carros';
    this.service.read().subscribe(carros =>{
      this.carros = carros
      console.log(carros);
    })
  }

  setaTela() {
    this.setaBotao.emit(CrudEnum.DETALHE);
  }

}
