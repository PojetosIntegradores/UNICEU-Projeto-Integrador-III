import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcedimentosDetalhesComponent } from './procedimentos-detalhes.component';

describe('ProcedimentosDetalhesComponent', () => {
  let component: ProcedimentosDetalhesComponent;
  let fixture: ComponentFixture<ProcedimentosDetalhesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentosDetalhesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcedimentosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
