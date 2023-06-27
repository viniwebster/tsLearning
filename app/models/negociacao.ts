import { Modelo } from "../interfaces/modelo-interfaces.js";


export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
        ){}
    
    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }

    public paraTexto(): string{
        return(`
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
        `)
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }

}