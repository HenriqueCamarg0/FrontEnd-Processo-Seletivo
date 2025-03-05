export enum JobType {
    DESENVOLVEDOR_BACKEND = 'DESENVOLVEDOR_BACKEND',
    DESENVOLVEDOR_FRONTEND = 'DESENVOLVEDOR_FRONTEND',
    ANALISTA_DE_SISTEMAS = 'ANALISTA_DE_SISTEMAS',
    ENGENHEIRO_DE_DADOS = 'ENGENHEIRO_DE_DADOS',
    CIENTISTA_DE_DADOS = 'CIENTISTA_DE_DADOS',
    GERENTE_DE_PROJETOS = 'GERENTE_DE_PROJETOS',
    ARQUITETO_DE_SOLUCOES = 'ARQUITETO_DE_SOLUCOES'
}

export interface Job {
    id: number;
    type: JobType;
    titulo: string;
    descricao: string;
    requisitos: string[];
    salarioMin: number;
    salarioMax: number;
    status: 'ABERTA' | 'FECHADA';
    createdAt: Date;
    updatedAt?: Date;
}

export const JobTitles: { [key in JobType]: string } = {
    [JobType.DESENVOLVEDOR_BACKEND]: 'Desenvolvedor Backend',
    [JobType.DESENVOLVEDOR_FRONTEND]: 'Desenvolvedor Frontend',
    [JobType.ANALISTA_DE_SISTEMAS]: 'Analista de Sistemas',
    [JobType.ENGENHEIRO_DE_DADOS]: 'Engenheiro de Dados',
    [JobType.CIENTISTA_DE_DADOS]: 'Cientista de Dados',
    [JobType.GERENTE_DE_PROJETOS]: 'Gerente de Projetos',
    [JobType.ARQUITETO_DE_SOLUCOES]: 'Arquiteto de Soluções'
};