// backend/src/types/servico.ts

// Interface que reflete exatamente a sua tabela 'servicos' no Supabase
export interface Servico {
    id: string; // ou number, se você não usou UUID
    nome: string;
    descricao: string | null; // Nullable
    preco: number; // Armazenado como Decimal, mas tratado como number/string no TS
    duracaoMinutos: number;
    criadoEm: Date;
}

// Tipos de dados de entrada (o que o cliente envia)
export type CreateServicoData = Omit<Servico, 'id' | 'criadoEm'>;
export type UpdateServicoData = Partial<CreateServicoData>;