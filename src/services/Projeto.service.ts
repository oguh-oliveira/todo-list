import Projeto from "@models/Projeto.model";
import ProjetoRepository from "@repositories/Projeto.repository";

export default class ProjetoService {
    adicionarProjeto(nome : String){
        const projeto = new Projeto(nome)

        const repo = new ProjetoRepository()

        repo.inserirProjeto(projeto)
    }
}