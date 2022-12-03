import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-carros-inserir',
  templateUrl: './carros-inserir.component.html',
  styleUrls: ['./carros-inserir.component.scss'],
})
export class CarrosInserirComponent implements OnInit {

  @Input() paramsApi:any;
  @Output() retorno = new EventEmitter<string>();

  constructor(private service: CrudServiceService) { }

  product: any = {
    name: '',
    price: null
  }

  ngOnInit(): void {

  }

  createPoduct(): void {
    this.service.create(this.product).subscribe(() => {
      this.service.presentToast('top', 'Salvo com sucesso!!!')
    })
  }

  cancel(): void {
  }
}
