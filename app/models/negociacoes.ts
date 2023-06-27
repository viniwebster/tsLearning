import { Modelo } from "../interfaces/modelo-interfaces.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Modelo<Negociacoes> {

    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public paraTexto(): string{
        return(`
        ${this.negociacoes}
        `)
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }

}