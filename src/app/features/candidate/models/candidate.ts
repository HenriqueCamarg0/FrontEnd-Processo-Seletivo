import { JobType } from "./job";

export interface Candidate {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  vaga: JobType;
  salarioPretendido: number;
  linkedin?: string;
  gitHub?: string;
  status?: 'INSCRITO' | 'EM_ANALISE' | 'APROVADO' | 'REPROVADO';
}
