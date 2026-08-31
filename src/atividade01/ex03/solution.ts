export const ordernarDecrescente = <T>(array: T[]): T[] => {
    return array.sort((a: T, b: T) => a > b ? -1 : 1); // ternário compara de forma reversa
}

/*
let array: string[] = ['carro', 'boneco', 'ave', 'lapis'];
console.log(ordernarDecrescente(array));
*/