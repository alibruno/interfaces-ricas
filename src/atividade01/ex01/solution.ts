export function mapAoQuadradoFor(a: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < a.length; i++) {
        let n = a[i];
        result.push(n * n);
    }
    return result;
}

export function mapAoQuadradoForEach(a: number[]): number[] {
    let result: number[] = [];
    a.forEach((n) => {
        result.push(n * n);
    });
    return result;
}

/*
let numeros: number[] = [3, 5, 7, 3, 8, 9, 1];
console.log(mapAoQuadradoFor(numeros));
console.log(mapAoQuadradoForEach(numeros));
*/