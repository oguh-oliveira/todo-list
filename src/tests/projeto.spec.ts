import Projeto from "@models/Projeto.model";
import ProjetoRepository from "@repositories/Projeto.repository";
import ProjetoService from "@services/Projeto.service";
import { projetos } from "../db/db.local";


describe('teste relacionado ao projeto',()=>{

    it('criar um projeto',() => {
        const projeto = new Projeto('nome')
        expect(projeto.getNome()).toBe('nome')
        expect(projeto.getId()).not.toBeNull()

    })

    it('adicionar um projeto a lista', () => {
        const projetoService = new ProjetoService()
        projetoService.adicionarProjeto('projeto')
        
        expect(projetos.length).toEqual(1)
        projetoService.adicionarProjeto('projeto2')
        expect(projetos.length).toEqual(2)
        
    })
})