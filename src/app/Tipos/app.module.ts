import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppTipoComponent } from './app.tipo.component';
import { TipoService } from '../../core/tipo.service'; // Mejor organizar los servicios en una carpeta

@NgModule({
  declarations: [AppTipoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TipoService
  ],
  bootstrap: [
    AppTipoComponent
  ]
})
export class AppModule {}
