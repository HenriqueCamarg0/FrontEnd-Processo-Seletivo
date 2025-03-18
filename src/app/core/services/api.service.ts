import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../../features/candidate/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'http://localhost:8080/api/formulario'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.API}/lista-de-candidatos`);
  }
  
  // Adicione outros métodos conforme necessário para interagir com sua API
  getCandidateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/candidato/${id}`);
  }

  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(`${this.API}/cadastrar-candidato`, JSON.stringify(candidate));
  }

  updateCandidate(id: number, candidate: any): Observable<any> {
    return this.http.put<any>(`${this.API}/candidato/${id}`, candidate);
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/candidato/${id}`);
  }
}
