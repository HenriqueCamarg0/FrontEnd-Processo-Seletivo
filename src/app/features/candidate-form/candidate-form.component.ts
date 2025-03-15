import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobTitles, JobType } from '../candidate/models/job';
import { CandidateService } from '../../core/services/candidate.service'; // Import the service

/**
 * Componente responsável pelo formulário de candidatura
 * Utiliza ReactiveFormsModule para gerenciamento do formulário
 */
@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class CandidateFormComponent implements OnInit {
  // Formulário reativo para captura dos dados do candidato
  jobForm: FormGroup = new FormGroup({});
  // Array com os tipos de vagas disponíveis
  jobTypes = Object.values(JobType);
  // Objeto com os títulos das vagas
  jobTitles = JobTitles;
  
  constructor(private fb: FormBuilder, private candidateService: CandidateService) {} // Inject the service

  /**
   * Inicializa o formulário com os campos necessários e suas validações
   */
  ngOnInit() {
    this.jobForm = this.fb.group({
      id: [null], // ID opcional
      nome: ['', [Validators.required, Validators.minLength(3)]], // Nome com mínimo de 3 caracteres
      email: ['', [Validators.required, Validators.email]], // Email válido
      telefone: ['', [Validators.required]], // Telefone obrigatório
      vaga: ['', Validators.required], // Vaga obrigatória
      salarioPretendido: ['', [Validators.required, Validators.min(0)]], // Salário maior que zero
      linkedin: [''], // LinkedIn opcional
      gitHub: [''], // GitHub opcional
      status: ['EM_ANALISE'] // Status padrão
    });
  }

  /**
   * Método chamado ao submeter o formulário
   * Valida o formulário antes de processar os dados
   */
  onSubmit() {
    if (this.jobForm.valid) {
      // Captura os dados do formulário
      const formData = this.jobForm.value;
      console.log('Form data:', formData); // Log the form data
      // Envia os dados para o serviço CandidateService
      this.candidateService.cadastrarCandidato(formData).subscribe({
        next: (response) => {
          console.log('Form submitted:', response);
          this.showSubmitAlert();
          this.jobForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          alert('Erro ao enviar o formulário');
        }
      });
    } else {
      this.markFormGroupTouched(this.jobForm);
    }
  }

  /**
   * Verifica se um campo específico contém erro
   * @param field Nome do campo a ser verificado
   * @returns true se o campo contiver erro e estiver tocado
   */
  hasError(field: string): boolean {
    const control = this.jobForm.get(field);
    return !!(control && control.errors && control.touched);
  }

  /**
   * Retorna a mensagem de erro apropriada para cada tipo de validação
   * @param field Nome do campo para verificar o erro
   * @returns Mensagem de erro correspondente
   */
  getErrorMessage(field: string): string {
    const control = this.jobForm.get(field);
    
    if (control?.errors) {
      if (control.errors['required']) return 'Campo obrigatório';
      if (control.errors['email']) return 'Email inválido';
      if (control.errors['minlength']) return 'Mínimo 3 caracteres';
      if (control.errors['min']) return 'Valor deve ser maior que 0';
    }
    return '';
  }

  /**
   * Marca todos os campos do formulário como tocados
   * Útil para mostrar erros quando o usuário tenta enviar um formulário inválido
   * @param formGroup Grupo de formulário a ser marcado
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  /**
   * Exibe um alerta de sucesso quando o formulário é enviado
   */
  showSubmitAlert() {
    alert('Formulário enviado com sucesso!');
  }
}