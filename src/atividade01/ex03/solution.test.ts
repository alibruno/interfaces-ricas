import { ordernarDecrescente } from './solution';

test('Ordenação decrescente de um determinado array', () => {
    const entrada: string[] = ['carro', 'boneco', 'ave', 'lapis'];
    const resultadoEsperado: string[] = ['lapis', 'carro', 'boneco', 'ave'];

    expect(ordernarDecrescente(entrada)).toEqual(resultadoEsperado);
});