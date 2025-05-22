import { Component, input, OnInit } from '@angular/core';
import { FestivosService } from '../../core/festivos.service';
import { map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppFestivosComponent implements OnInit {
  festivo = {
    id: 0,
    nombre: '',
    dia: 0,
    mes: 0,
    diasPascuas: 0,
    idTipo: 0,
    tipo: {
      id: 0,
      nombre: ''
    }
  };

  festivoConsultado: any;
  todosFestivos$ = this.festivosService.listaFestivos$;
  festivosFiltrados: any[] = [];
  idConsulta: number = 0;
  tipoBusqueda: number = 0;
  nombreBusqueda: string = '';
  idModificar: number = 0;
  idEliminar: number = 0;
  lenght$ = this.todosFestivos$.pipe(map(festivos => festivos.length));
  fechaValidar: string = ''; // Inicializa con la fecha actual
  resultadoValidacion: boolean | null = null;
  constructor(private festivosService: FestivosService, private Router: Router) { }


  ngOnInit() {
    this.festivosService.listarTodos().subscribe(); // Solo dispara la carga inicial
  }


  agregar() {
    this.festivosService.agregarFestivo(this.festivo).subscribe(() => {
      alert('Festivo agregado');
    });
  }

  consultar() {
    this.festivosService.obtenerFestivo(this.idConsulta).subscribe(data => {
      this.festivoConsultado = data;
    });
  }

  listarTodos() {
    this.festivosService.listarTodos().subscribe();
  }


  buscarPorTipoYNombre() {
    this.festivosService.buscarPorTipoYNombre(this.tipoBusqueda, this.nombreBusqueda)
      .subscribe(data => {
        this.festivosFiltrados = data;
      });
  }

  actualizarFestivo() {
    this.festivo.id = this.idModificar;
    this.festivosService.actualizarFestivo(this.idModificar, this.festivo).subscribe(() => {
      alert('Festivo actualizado');
    });
  }

  eliminarFestivo() {
    this.festivosService.eliminarFestivo(this.idEliminar).subscribe(() => {
      alert('Festivo eliminado');
    });
  }

  validarFecha() {
    console.log("empieza la validacion de la fecha", this.fechaValidar);
    if (!this.fechaValidar) {
      this.resultadoValidacion = null;
      return;
    }
    const [anio, mes, dia] = this.fechaValidar.split('-').map(Number);
    this.checkIfFestivoExists(dia, mes).subscribe(existe => {
      this.resultadoValidacion = existe;
    })
  };

  checkIfFestivoExists(dia: number, mes: number): Observable<boolean> {
    return this.todosFestivos$.pipe(
      map(festivos => festivos.some(festivo =>
        festivo.dia === dia && festivo.mes === mes && festivo
      ))
    );
  }

  irPaginaFestivo(pagina: string): void {
    this.Router.navigate([pagina]);
  }
}
