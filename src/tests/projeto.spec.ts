import {criarProjeto } from "@services/Projeto.services";

describe('teste relacionado ao projeto',()=>{
    it('criar um projeto',() => {
        const projeto = criarProjeto('nome')
        expect(projeto.nome).toBe('nome')
        expect(projeto.id).not.toBeNull()

    })
})