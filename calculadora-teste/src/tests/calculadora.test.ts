import { soma } from '../calculadora';

test("Soma de 2 + 3 deve ser 5", () => {
    expect(soma(2, 3)).toBe(5);
});

test("Soma de números negativos -1 + (-1) deve ser -2", () => {
    expect(soma(-1, -1)).toBe(-2);
});
