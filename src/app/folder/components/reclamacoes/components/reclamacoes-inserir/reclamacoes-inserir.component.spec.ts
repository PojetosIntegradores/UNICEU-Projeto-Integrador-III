import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamacoesInserirComponent } from './reclamacoes-inserir.component';

describe('ReclamacoesInserirComponent', () => {
  let component: ReclamacoesInserirComponent;
  let fixture: ComponentFixture<ReclamacoesInserirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacoesInserirComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamacoesInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
