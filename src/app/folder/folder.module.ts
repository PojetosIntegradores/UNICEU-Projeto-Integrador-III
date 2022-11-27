import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { CarrosComponent } from './components/carros/carros.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { MecanicasComponent } from './components/mecanicas/mecanicas.component';
import { ProcedimentosComponent } from './components/procedimentos/procedimentos.component';
import { ReclamacoesComponent } from './components/reclamacoes/reclamacoes.component';
import { CarrosDetalhesComponent } from './components/carros/components/carros-detalhes/carros-detalhes.component';
import { CarrosListaComponent } from './components/carros/components/carros-lista/carros-lista.component';
import { CarrosInserirComponent } from './components/carros/components/carros-inserir/carros-inserir.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    AvaliacoesComponent,
    CarrosComponent,
    FavoritosComponent,
    MecanicasComponent,
    ProcedimentosComponent,
    ReclamacoesComponent,
    CarrosDetalhesComponent,
    CarrosListaComponent,
    CarrosInserirComponent
  ]
})
export class FolderPageModule {}
