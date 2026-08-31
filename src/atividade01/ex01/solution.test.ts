import { mapAoQuadradoFor, mapAoQuadradoForEach } from "./solution";

const array = [3, 5, 7, 3, 8, 9, 1];
const result = [9, 25, 49, 9, 64, 81, 1];

test('Elevando todos os elementos de um array ao quadrado - iteração \'for\'', () => {
    expect(mapAoQuadradoFor(array)).toEqual(result);
});

test('Elevando todos os elementos de um array ao quadrado - iteração \'forEach\'', () => {
    expect(mapAoQuadradoForEach(array)).toEqual(result);
});