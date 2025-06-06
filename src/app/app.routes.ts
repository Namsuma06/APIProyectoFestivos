import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFestivosComponent } from './Festivos/app.component';
import { AppTipoComponent } from './Tipos/app.Tipo.component';
import { InicioComponent } from './inicio/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'festivos', component: AppFestivosComponent },
  { path: 'tipo', component: AppTipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }