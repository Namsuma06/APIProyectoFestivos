import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { FestivosportipoDtos } from '../shared/dto/FestivosportipoDto';


@Injectable({
  providedIn: 'root'
})
export class TipoFestivoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.baseUrl}/tipo`;
   }

   public listarTipos(): Observable<FestivosportipoDtos[]> {
    return this.http.get<FestivosportipoDtos[]>(`${this.url}listar`);
   }

   public obtenerTipo(id: number): Observable<FestivosportipoDtos> {
    return this.http.get<FestivosportipoDtos>(`${this.url}obtener/${id}`);
   }

    public agregar(Tipo:FestivosportipoDtos): Observable<FestivosportipoDtos> {
    return this.http.post<FestivosportipoDtos>(`${this.url}agregar`, Tipo);
  }

  public modificar(Tipo:FestivosportipoDtos): Observable<FestivosportipoDtos> {
    return this.http.put<FestivosportipoDtos>(`${this.url}modificar`, Tipo);
  }

  public eliminar(id:number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}eliminar/${id}`);
  }
}