import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = "Festivos del Año";
  isMenuAbierto = false; // cerrado al iniciar

  public opciones = [
    { titulo: "Festivos", url: "festivos", icono: "assets/icons/festivos.png" },
    { titulo: "Tipos", url: "tipo", icono: "assets/icons/tipo.png" }
  ];
}
