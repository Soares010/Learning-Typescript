// Manipulando funções
const sum = (x: number, y: number): string => (x + y).toString();

const value = sum(1, 2);

// Manipulando o retorno das funções
const log = (message: string): void => console.log(message);

// Interfaces junto com funções
interface MathFunc {
  (x: number, y: number): number | string;
}

const divide: MathFunc = (x: number, y: number): number => x / y;
