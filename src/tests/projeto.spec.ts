import Projeto from "@models/Projeto.model";
import ListaProjeto from "@repositories/Projeto.repository"

describe('teste relacionado ao projeto',()=>{

    it('criar um projeto',() => {
        const projeto = new Projeto('nome')
        expect(projeto.getNome()).toBe('nome')
        expect(projeto.getId()).not.toBeNull()

    })

    it('adicionar um projeto a lista', () => {
        const projeto = new Projeto('nome')
        ListaProjeto.push(projeto)
        expect(ListaProjeto.length).toEqual(1)

    })
})