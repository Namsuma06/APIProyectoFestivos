import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../core/tipo.service';
import { Observable, map } from 'rxjs';
import { Tipo } from '../../shared/entidades/Tipo';
import { Router } from '@angular/router';
import { Festivos } from '../../shared/entidades/Festivo';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { FestivosportipoDtos } from '../../shared/dto/FestivosportipoDto';
import { FestivosService } from '../../core/festivos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.Tipo.component.html',
  styleUrls: ['./app.Tipo.component.css'],
})
export class AppTipoComponent implements OnInit {
  tipos: Tipo[] = [];
  tipos$: Observable<Tipo[]>;
  festivos: FestivosportipoDtos[] = [];
  tipoSeleccionado: number = 0;
  tipo: Tipo = {
    id: 0,
    nombre: ''
  };

  public readonly TAMANIO: number = 2;
  public columnas = [
    { name: "Nombre del Festivo", prop: "nombre" },
    { name: "Tipo", prop: "nombreTipo" }
  ];

  tipoConsultado: any;
  idConsulta: number = 0;
  idModificar: number = 0;
  idEliminar: number = 0;

  public modoColumna = ColumnMode;
  public tiposConsultados = Selection;
  public tipoEscogido: Tipo | undefined;
  public indiceTipoEscogido: number = -1;
lenght$: any;


  constructor(private tipoService: TipoService,
    private festivoService: FestivosService,
    public dialogServicio: MatDialog,
    private Router: Router) { }

  ngOnInit(): void {
    this.listarTipos();
  }

  listarTipos(): void {
    this.tipoService.listar().subscribe(response => {
      this.tipos = response;
    });
  }

  escoger(event: any) {
    if (event.type == "click") {
      this.tipoEscogido = event.row;
      this.indiceTipoEscogido = this.tipos.findIndex(t => t == this.tipoEscogido);
      this.listarFestivosPorTipo();
    }
  }

  listarFestivosPorTipo(): void {
    if (!this.tipoEscogido || !this.tipoEscogido.id) {
      this.festivos = [];
      return;
    }

    this.festivoService.obtenerFestivosPorTipo(this.tipoEscogido.id).subscribe({
      next: festivos => {
        this.festivos = festivos;
      },
      error: err => {
        console.error('Error al obtener los festivos por tipo:', err);
        this.festivos = [];
      }
    });
  }

  agregarTipo() {
    this.tipoService.agregarTipo(this.tipo).subscribe(() => {
      alert('Tipo agregado');
      //this.listarTipos();
    });
  }

  consultarTipoPorId() {
    this.tipoService.obtenerTipoPorId(this.idConsulta).subscribe(data => {
      this.tipoConsultado = data;
    });
  }

  actualizarTipo() {
    this.tipo.id = this.idModificar;
    this.tipoService.actualizarTipo(this.idModificar, this.tipo).subscribe(() => {
      alert('Tipo actualizado');
      //this.listarTipos();
    });
  }

  eliminarTipo() {
    this.tipoService.eliminarTipo(this.idEliminar).subscribe(() => {
      alert('Tipo eliminado');
      //this.listarTipos();
    });
  }

  irPaginaFestivo(pagina: string): void {
    this.Router.navigate([pagina]);
  }
}