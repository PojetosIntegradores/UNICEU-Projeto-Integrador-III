import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcedimentosInserirComponent } from './procedimentos-inserir.component';

describe('ProcedimentosInserirComponent', () => {
  let component: ProcedimentosInserirComponent;
  let fixture: ComponentFixture<ProcedimentosInserirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentosInserirComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcedimentosInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
