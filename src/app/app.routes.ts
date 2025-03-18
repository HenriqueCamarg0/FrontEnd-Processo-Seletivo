import { Routes } from '@angular/router';
import { CandidateFormComponent } from './features/candidate-form/candidate-form.component';
import { CandidateDetailsComponent } from './features/candidate-details/candidate-details.component';
import { CandidateListComponent } from './features/candidate-list/candidate-list.component';

export const routes: Routes = [
    // Rota padrão - Redirecionamento inicial
    { 
        path: '', redirectTo: 'formulario', pathMatch: 'full', title: 'Processo Seletivo'
    },

    // Formulário de Candidatura
    { 
        path: 'formulario', component: CandidateFormComponent,
        title: 'Cadastro de Candidato'
    },

    // Área do Candidato - Agrupamento de rotas relacionadas
    { 
        path: 'candidato',
        children: [
            {
                path: '', component: CandidateDetailsComponent,
                title: 'Detalhes do Candidato'
            }
        ]
    },
    {
        path: 'candidato/:id', component: CandidateDetailsComponent,
        title: 'Perfil do Candidato'
    },

    // Listagem de Candidatos - Agrupamento de rotas relacionadas
    { 
        path: 'candidatos',
        children: [
            {
                path: '', component: CandidateListComponent, title: 'Lista de Candidatos'
            },
            {
                path: ':id', component: CandidateListComponent, title: 'Filtro de Candidatos'
            }
        ]
    },

    // Rota curinga - Redirecionamento para formulário
    { 
        path: '**', redirectTo: 'formulario'
    }
];