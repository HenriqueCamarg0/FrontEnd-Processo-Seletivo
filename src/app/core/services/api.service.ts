import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lista-de-candidatos`);
  }
  
  // Adicione outros métodos conforme necessário para interagir com sua API
  getCandidateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/candidato/${id}`);
  }

  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/candidato`, candidate);
  }

  updateCandidate(id: number, candidate: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/candidato/${id}`, candidate);
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/candidato/${id}`);
  }
}
