import { Request, Response } from 'express';
import { ServicoService } from '../services/ServicoService.js'; // Note o .js

const service = new ServicoService();

export class ServicoController {
    
    // GET /servicos
    async listar(req: Request, res: Response): Promise<void> {
        try {
            const servicos = await service.listarServicos();
            res.status(200).json(servicos);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor ao buscar serviços.' });
        }
    }

    // POST /servicos
    async criar(req: Request, res: Response): Promise<void> {
        try {
            const novoServico = await service.criarServico(req.body);
            res.status(201).json(novoServico); 
        } catch (error: any) {
            res.status(400).json({ error: error.message }); 
        }
    }
    
    // PUT /servicos/:id
    async atualizar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const servicoAtualizado = await service.atualizarServico(id, req.body);
            res.status(200).json(servicoAtualizado);
        } catch (error: any) {
            if (error.message.includes('não encontrado')) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }
    
    // DELETE /servicos/:id
    async deletar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            await service.deletarServico(id);
            res.status(204).send(); 
        } catch (error: any) {
            if (error.message.includes('não encontrado')) {
                res.status(404).json({ error: error.message }); 
            } else {
                 res.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}