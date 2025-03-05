import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobTitles, JobType } from '../candidate/models/job';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class CandidateFormComponent implements OnInit {
  jobForm: FormGroup = new FormGroup({});
  jobTypes = Object.values(JobType);
  jobTitles = JobTitles;
  
constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      vaga: ['', Validators.required],
      salario: ['', [Validators.required, Validators.min(0)]],
      linkedin: [''],
      github: ['']
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form submitted:', this.jobForm.value);
      this.jobForm.reset();
    } else {
      this.markFormGroupTouched(this.jobForm);
    }
  }

  hasError(field: string): boolean {
    const control = this.jobForm.get(field);
    return !!(control && control.errors && control.touched);
  }

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

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  showSubmitAlert() {
    alert('Formulário enviado com sucesso!');
   }
}