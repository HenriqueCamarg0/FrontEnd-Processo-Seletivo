import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidateService } from '../../core/services/candidate.service';
import { Candidate } from '../candidate/models/candidate';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CandidateDetailsComponent implements OnInit {
  candidate?: Candidate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadCandidate(id);
    }
  }

  loadCandidate(id: number) {
    this.candidateService.buscarCandidatoPorId(id).subscribe({
      next: (data) => this.candidate = data,
      error: (error) => {
        console.error('Erro ao carregar candidato:', error);
        alert('Erro ao carregar os dados do candidato');
      }
    });
  }

  onEdit() {
    if (this.candidate) {
      this.router.navigate(['/candidates/edit', this.candidate.id]);
    }
  }

  onDelete() {
    if (this.candidate && confirm('Tem certeza que deseja excluir este candidato?')) {
      this.candidateService.deletarCandidato(this.candidate.id!).subscribe({
        next: () => {
          alert('Candidato excluído com sucesso');
          this.router.navigate(['/candidates']);
        },
        error: (error) => {
          console.error('Erro ao excluir candidato:', error);
          alert('Erro ao excluir o candidato');
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['/candidates']);
  }
}