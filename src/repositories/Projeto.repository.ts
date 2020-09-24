import Projeto from "@models/Projeto.model";
import {projetos} from "../db/db.local"

export default class ProjetoRepository {

    inserirProjeto(projeto:Projeto){
        projetos.push(projeto)
    }

    
}