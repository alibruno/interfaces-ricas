import { ProcessadorPagamentoPix, ProcessadorPagamentoCartaoDeCredito } from './solution';

test('deve processar pagamento com PIX', () => {
    const processadorPix = new ProcessadorPagamentoPix('chave@pix');

    processadorPix.chave = 'nova-chave@pix';

    const resultado = processadorPix.processar(150);

    expect(resultado).toBe(true);
    expect(processadorPix.chave).toBe('nova-chave@pix');
});

test('deve processar pagamento com Cartão de Crédito', () => {
    const dataValidade = new Date('2026-08-30');
    const processadorCartao = new ProcessadorPagamentoCartaoDeCredito('1234567890123456', dataValidade, '123');

    processadorCartao.numeroCartao = '9876543210987654';
    processadorCartao.cvv = '456';

    const resultado = processadorCartao.processar(500);

    expect(resultado).toBe(true);
    expect(processadorCartao.numeroCartao).toBe('9876543210987654');
    expect(processadorCartao.cvv).toBe('456');
});
