import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../entities/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('/api/listaproduto');
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`/api/produto/${id}`);
  }

  cadastraProduto(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>('/api/produto/salvar', formData);
  }

  editaProduto(formData: FormData, id: number): Observable<FormData>{
    return this.http.put<FormData>(`/api/produto/editar/${id}`, formData);
  }

  excluirPrduto(id: number): Observable<String>{
    return this.http.delete<String>(`/api/produto/delete/${id}`);
  }

}
