import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  validaUsuario(usuarioFormData: FormData): Observable<FormData>{
    return this.http.post<FormData>(`/api/usuario/validausuario/`, usuarioFormData);
  }
}
