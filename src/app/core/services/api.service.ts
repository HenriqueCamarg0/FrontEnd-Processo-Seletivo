import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../../features/candidate/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * URL base para a API.
   */
  private readonly API = 'http://localhost:8080/api/formulario'; 

  constructor(private http: HttpClient) { }

  /**
   * Adiciona um novo candidato na API.
   * @param candidate - Os dados do candidato a ser adicionado.
   * @returns Um Observable contendo a resposta da API.
   */
  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(`${this.API}/cadastrar-candidato`, candidate, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
 
  /**
   * Busca a lista de candidatos da API.
   * @returns Um Observable contendo a lista de candidatos.
   */
  getListaCandidato(): Observable<any> {
    return this.http.get<any>(`${this.API}/lista-de-candidatos`);
  }
  
  /**
   * Busca um candidato pelo ID na API.
   * @param id - O ID do candidato a ser buscado.
   * @returns Um Observable contendo os dados do candidato.
   */
  getCandidateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/candidato/${id}`);
  }

  
  /**
   * Atualiza um candidato existente na API.
   * @param id - O ID do candidato a ser atualizado.
   * @param candidate - Os dados atualizados do candidato.
   * @returns Um Observable contendo a resposta da API.
   */
  updateCandidate(id: number, candidate: any): Observable<any> {
    return this.http.put<any>(`${this.API}/candidato/${id}`, candidate);
  }

  /**
   * Exclui um candidato pelo ID na API.
   * @param id - O ID do candidato a ser excluído.
   * @returns Um Observable contendo a resposta da API.
   */
  deleteCandidate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/candidato/${id}`);
  }
}
