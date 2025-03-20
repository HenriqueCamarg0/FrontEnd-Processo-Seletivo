import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Candidate } from '../candidate/models/candidate';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  @ViewChild('noCandidatesTemplate', { static: true }) noCandidatesTemplate!: TemplateRef<any>;

candidatos: Candidate[] = [];
filteredCandidatos: any[] = [];
searchTerm: string = '';
statusFilter: string = '';
router: any;
noCandidates: [] = [];

getTooltipInfo(candidato: any): string {
  return `
    Nome: ${candidato.nome}
    Email: ${candidato.email}
    Telefone: ${candidato.telefone}
    Vaga: ${(candidato.vaga)}
    Status: ${(candidato.status)}
    Salário Pretendido: R$ ${candidato.salarioPretendido.toLocaleString('pt-BR')}
  `;}

  editCandidate(candidato: any): void {
    // navegação para a página de edição
    this.router.navigate(['/editar-candidato', candidato.id]);
  }

  deleteCandidate() { }

constructor(private candidatoService: ApiService) {}

ngOnInit() { this.carregarCandidatos(); }

carregarCandidatos() {
  this.candidatoService.getListaCandidato().subscribe({
    next: (data) => {
      this.candidatos = data;
    },
    error: (error) => {
      console.error('Erro ao carregar candidatos:', error);
    }
  });
}

filterCandidates() {
  this.filteredCandidatos = this.candidatos.filter(candidato => {
    const matchesSearch = !this.searchTerm || 
      candidato.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      candidato.email.toLowerCase().includes(this.searchTerm.toLowerCase());
    
    const matchesStatus = !this.statusFilter || 
      candidato.status === this.statusFilter;

    return matchesSearch && matchesStatus;
  });
}
}