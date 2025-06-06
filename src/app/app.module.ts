import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';

// Material y ngx-datatable
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { NgFor } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppTipoComponent } from './Tipos/app.Tipo.component';
import { AppFestivosComponent } from './Festivos/app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTipoComponent,
    AppFestivosComponent,
    InicioComponent,
  ],
  imports: [
    RouterModule,
    RouterOutlet,
    NgFor,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    NgxDatatableModule,
    MatSidenavModule,
    MatNavList,
    MatIcon,
    MatToolbar,
  ],
  //providers: [TipoService],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}