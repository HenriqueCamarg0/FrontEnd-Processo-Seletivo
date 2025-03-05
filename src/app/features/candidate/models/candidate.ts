import { JobType } from "./job";

export interface Candidate {
    id?: number;
    name: string;
    email: string;
    phone: string;
    vaga: JobType;
    salario: number;
    linkedin?: string;
    github?: string;
    createdAt?: Date;
    status?: 'pending' | 'approved' | 'rejected';
  }
