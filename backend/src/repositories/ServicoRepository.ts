import prisma from '../prisma.js'; 

import { Servico, CreateServicoData, UpdateServicoData } from '../types/servico.js'; 

export class ServicoRepository {
    
    // READ ALL - Leitura de todos os serviços
    async findAll(): Promise<Servico[]> {
        return prisma.servico.findMany({
            orderBy: { nome: 'asc' }, 
        }) as Promise<Servico[]>; // Usamos 'as' para forçar o tipo que definimos
    }

    // READ ONE - Busca por ID
    async findById(id: string): Promise<Servico | null> {
        return prisma.servico.findUnique({
            where: { id },
        }) as Promise<Servico | null>;
    }

    // CREATE - Criação de um novo serviço
    async create(data: CreateServicoData): Promise<Servico> {
        return prisma.servico.create({ data }) as Promise<Servico>;
    }

    // UPDATE - Atualização por ID
    async update(id: string, data: UpdateServicoData): Promise<Servico> {
        return prisma.servico.update({
            where: { id },
            data: data,
        }) as Promise<Servico>;
    }

    // DELETE - Exclusão por ID
    async delete(id: string): Promise<Servico> {
        return prisma.servico.delete({
            where: { id },
        }) as Promise<Servico>;
    }
}