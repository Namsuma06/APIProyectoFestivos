import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tipo } from '../shared/entidades/Tipo';
import { environment } from '../environments/environment';

@Injectable()
export class TipoService {
  private baseUrl = environment.baseUrl + '/tipo'; // URL base de la API

  constructor(private http: HttpClient) {}

  private todosTipos = new BehaviorSubject<Tipo[]>([]);
  listaTipos$ = this.todosTipos.asObservable();

  agregarTipo(tipo: Tipo): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, tipo);
  }

  obtenerTipoPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtener/${id}`);
  }

  listarTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`).pipe(
      tap(tipos => this.todosTipos.next(tipos))
    );
  }

  actualizarTipo(id: number, tipo: Tipo): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, tipo);
  }

  eliminarTipo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }
}
