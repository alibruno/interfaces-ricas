import { filtroNumeroPar } from './solution';

test('Filtro de numeros pares de um arry', () => {
    const entrada: number[] = [8, 3, 9, 5, 6, 12];
    const resultadoEsperado: number[] = [8, 6, 12];

    expect(filtroNumeroPar(entrada)).toEqual(resultadoEsperado);
});