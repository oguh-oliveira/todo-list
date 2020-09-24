import Projeto from "@models/Projeto.model";

describe('teste relacionado ao projeto',()=>{
    it('criar um projeto',() => {
        const projeto = new Projeto('nome')
        expect(projeto.getNome()).toBe('nome')
        expect(projeto.getId()).not.toBeNull()

    })
})