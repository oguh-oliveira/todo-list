import Projeto from "@models/Projeto.model";
import {v4 as uuidV4} from "uuid";

export function criarProjeto(nome:String) : Projeto{
    
    return {
        id : uuidV4(),
        nome,
        tarefas:[]
    }
    
}