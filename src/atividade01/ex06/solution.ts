export interface ProcessarPagamento {
    processar(valor: number): boolean;
}

export class ProcessadorPagamentoPix implements ProcessarPagamento {
    chave: string;

    constructor(chave: string) {
        this.chave = chave;
    }

    processar(valor: number): boolean {
        console.log('processando pagamento com PIX...')
        console.log(`chave PIX: ${this.chave}, valor: ${valor}`);
        return true;
    }
}

export class ProcessadorPagamentoCartaoDeCredito implements ProcessarPagamento {
    numeroCartao: string;
    dataValidade: Date;
    cvv: string;

    constructor(numeroCartao: string, dataValidade: Date, cvv: string) {
        this.numeroCartao = numeroCartao;
        this.dataValidade = dataValidade;
        this.cvv = cvv;
    }

    processar(valor: number): boolean {
        console.log('processando pagamento com cartão de crédito...');
        console.log(`número do cartão: ${this.numeroCartao}, Data de validade: ${this.dataValidade}, cvv: ${this.cvv}, valor: ${valor}`);
        return true;
    }
}