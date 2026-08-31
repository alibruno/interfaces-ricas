import { concatenarComEspaco } from './solution';

test('Concatenação de strings separando-as por espaço', () => {
    const entrada: string[] = ['Arrays', 'com', 'TypeScript'];
    const resultadoEsperado: string = 'Arrays com TypeScript';

    expect(concatenarComEspaco(entrada)).toBe(resultadoEsperado);
});