import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tipo } from '../shared/entidades/Tipo';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class TipoService {

  private baseUrl = `${environment.baseUrl}/tipo`; // URL base de la API

  constructor(private http: HttpClient) {}

  listar(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(`${this.baseUrl}/listar`);
  }

  obtenerTipoPorId(id: number): Observable<Tipo> {
    return this.http.get<Tipo>(`${this.baseUrl}/obtener/${id}`);
  }

  agregarTipo(tipo: Tipo): Observable<Tipo> {
    return this.http.post<Tipo>(`${this.baseUrl}/agregar`, tipo);
  }

  actualizarTipo(id: number, tipo: Tipo): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/modificar/${id}`, tipo);
  }

  eliminarTipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar/${id}`);
  }

}