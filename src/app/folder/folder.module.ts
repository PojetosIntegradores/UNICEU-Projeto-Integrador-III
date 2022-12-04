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
import { MecanicasInserirComponent } from './components/mecanicas/components/mecanicas-inserir/mecanicas-inserir.component';
import { MecanicasDetalesComponent } from './components/mecanicas/components/mecanicas-detales/mecanicas-detales.component';
import { MecanicasListaComponent } from './components/mecanicas/components/mecanicas-lista/mecanicas-lista.component';
import { AvaliacoesListarComponent } from './components/avaliacoes/components/avaliacoes-listar/avaliacoes-listar.component';
import { AvaliacoesInserirComponent } from './components/avaliacoes/components/avaliacoes-inserir/avaliacoes-inserir.component';
import { AvaliacoesDetalhesComponent } from './components/avaliacoes/components/avaliacoes-detalhes/avaliacoes-detalhes.component';
import { ReclamacoesListaComponent } from './components/reclamacoes/components/reclamacoes-lista/reclamacoes-lista.component';
import { ReclamacoesDetalhesComponent } from './components/reclamacoes/components/reclamacoes-detalhes/reclamacoes-detalhes.component';
import { ReclamacoesInserirComponent } from './components/reclamacoes/components/reclamacoes-inserir/reclamacoes-inserir.component';
import { ProcedimentosListaComponent } from './components/procedimentos/components/procedimentos-lista/procedimentos-lista.component';
import { ProcedimentosDetalhesComponent } from './components/procedimentos/components/procedimentos-detalhes/procedimentos-detalhes.component';
import { ProcedimentosInserirComponent } from './components/procedimentos/components/procedimentos-inserir/procedimentos-inserir.component';

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
    AvaliacoesListarComponent,
    AvaliacoesInserirComponent,
    AvaliacoesDetalhesComponent,

    FavoritosComponent,

    ProcedimentosComponent,
    ProcedimentosListaComponent,
    ProcedimentosDetalhesComponent,
    ProcedimentosInserirComponent,

    ReclamacoesComponent,
    ReclamacoesListaComponent,
    ReclamacoesDetalhesComponent,
    ReclamacoesInserirComponent,
    
    CarrosComponent,
    CarrosDetalhesComponent,
    CarrosListaComponent,
    CarrosInserirComponent,
    
    MecanicasComponent,
    MecanicasDetalesComponent,
    MecanicasInserirComponent,
    MecanicasListaComponent,
  ]
})
export class FolderPageModule {}
