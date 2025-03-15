import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../../features/candidate/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Criar novo candidato
  cadastrarCandidato(candidate: Candidate): Observable<Candidate> {
    console.log('Sending data to API:', candidate); // Log the data being sent to the API
    return this.http.post<Candidate>(`${this.apiUrl}/cadastrar-candidato`, candidate);
  }

  // Listar todos os candidatos 
  listarCandidatos(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.apiUrl}/lista-de-candidatos`);
  }

  // Buscar candidato por ID
  buscarCandidatoPorId(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.apiUrl}/lista-de-candidato/${id}`);
  }

  // Atualizar candidato
  atualizarCandidato(id: number, candidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.apiUrl}/atualizar-candidato/${id}`, candidate);
  }
  // Deletar candidato
  deletarCandidato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletar-candidato/${id}`);
  }
}