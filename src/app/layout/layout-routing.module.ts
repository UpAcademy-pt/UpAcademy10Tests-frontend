import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { CriarTestesComponent } from './criar-testes/criar-testes.component'
import { ConsultarEnunciadosComponent } from './consultar-enunciados/consultar-enunciados.component'
import { ConsultarResultadosComponent } from './consultar-resultados/consultar-resultados.component'


const routes: Routes = [
  {path: '',
  component:LayoutComponent,
children: [
  {path:'',component:MainComponent},
  {path:'createTest',component: CriarTestesComponent},
  {path:'tests',component: ConsultarEnunciadosComponent},
  {path:'results', component: ConsultarResultadosComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
