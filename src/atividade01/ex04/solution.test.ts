import { extracaoDoisPrimeirosElementos } from './solution';

test('Extração dos dois primeiros elementos do array', () => {
    const entrada: number[] = [2, 4, 6, 2, 8, 9, 5];
    const resultadoEsperado: number[] = [2, 4];

    expect(extracaoDoisPrimeirosElementos(entrada)).toEqual(resultadoEsperado);
});