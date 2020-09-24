import {v4 as uuidV4} from "uuid";

export default class Projeto {
    private nome : String
    private id : String
    private tarefas: []

    constructor(nome){
        this.nome = nome
        this.id = uuidV4()
    }

    getNome(){
        return this.nome    
    }

    getId(){
        return this.id
    }

}