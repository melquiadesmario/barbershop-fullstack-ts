import { Servico, CreateServicoData, UpdateServicoData } from '../types/servico.js'; 
import { ServicoRepository } from '../repositories/ServicoRepository.js';

const repository = new ServicoRepository();

export class ServicoService {

    private validateServiceData(data: any) {
        if (!data.nome || typeof data.nome !== 'string' || data.nome.trim().length < 3) {
            throw new Error("O nome do serviço é obrigatório e deve ter no mínimo 3 caracteres.");
        }
        if (data.preco === undefined || isNaN(Number(data.preco)) || Number(data.preco) <= 0) {
            throw new Error("O preço deve ser um valor numérico positivo.");
        }
        if (data.duracaoMinutos === undefined || isNaN(Number(data.duracaoMinutos)) || Number(data.duracaoMinutos) <= 0) {
            throw new Error("A duração em minutos é obrigatória e deve ser positiva.");
        }
    }

    // READ ALL
    async listarServicos(): Promise<Servico[]> {
        return repository.findAll();
    }

    // CREATE
    async criarServico(data: CreateServicoData): Promise<Servico> {
        this.validateServiceData(data); 
        return repository.create(data);
    }
    
    // UPDATE
    async atualizarServico(id: string, data: UpdateServicoData): Promise<Servico> {
        const servicoExistente = await repository.findById(id);
        if (!servicoExistente) {
            throw new Error(`Serviço com ID ${id} não encontrado para atualização.`);
        }
        return repository.update(id, data);
    }
    
    // DELETE
    async deletarServico(id: string): Promise<Servico> {
        const servicoExistente = await repository.findById(id);
        if (!servicoExistente) {
            throw new Error(`Serviço com ID ${id} não encontrado para exclusão.`);
        }
        return repository.delete(id);
    }
}