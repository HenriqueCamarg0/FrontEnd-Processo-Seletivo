import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Candidate } from '../candidate/models/candidate';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CandidateDetailsComponent implements OnInit {
  candidate?: Candidate; // Armazena os detalhes do candidato

  constructor(
    private route: ActivatedRoute, // Para acessar parâmetros de rota
    private router: Router, // Para navegação programática
    private apiService: ApiService // Serviço para chamadas de API
  ) {}

  ngOnInit(): void {
    // Obtém o ID do candidato a partir da rota
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Busca os detalhes do candidato pelo ID
      this.apiService.getCandidateById(+id).subscribe({
        next: (candidate) => this.candidate = candidate,
        error: (err) => console.error('Error fetching candidate:', err)
      });
    }
  }

  onEdit() {
    // Navega para a página de edição do candidato
    if (this.candidate) {
      this.router.navigate(['/candidato', this.candidate.id, 'edit']);
    }
  }

  onDelete() {
    // Deleta o candidato e navega de volta para a lista de candidatos
    if (this.candidate) {
      this.apiService.deleteCandidate(this.candidate.id).subscribe({
        next: () => this.router.navigate(['/candidatos']),
        error: (err) => console.error('Error deleting candidate:', err)
      });
    }
  }

  onBack() {
    // Navega de volta para a lista de candidatos
    this.router.navigate(['/candidatos']);
  }
}