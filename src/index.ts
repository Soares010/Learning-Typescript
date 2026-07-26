// Decalarando uma variável em typescript
let age: number = 5;
const firstName: string = "Mário";
const isValid: boolean = true;
// any é o tipo que aceita qualquer tipo de dado que é atribuído à
// varável
let idk: any = 5;

idk = "5";

// Isso aqui define que ids vai ser uma lista de números!
const ids: number[] = [1, 2, 3, 4, 5];

// Tupla -> Ele se parece com um array convencional mas não é
// Ele tem que ser implementado de acordo a ordem estabelecida
// na tipegem dentro dos colchetes, se assim não for ele dará erro
const person: [number, string] = [12, "Mário"];

// Lista de tuplas
const people: [number, string][] = [
  [1, "Mário"],
  [2, "Euclides"],
  [3, "Aldair"],
  [4, "Selton"],
];

// Aprendendo sobre intersections(Interseções)
// É nada mais nada menos quando a gente quer que uma
// Variável use um tipo ou outro Ex:
const productId: number | string | boolean = "12";

// Aprendendo sobre o Enum
// é um recurso que permite definir um conjunto de constantes nomeadas
enum Direction {
  Up = 1,
  Down = 2,
}

// Assim esse direction vale 1
const direction = Direction.Up;
console.log(direction);

// Aprendendo sobre type assertions
// É basicamento quando a gente quer mudar o tipo de uma variável, ou tratar uma variável que é de um tipo como um tipo diferente!

const productName: any = "Boné";
// Eu quero tratar essa variável como um outro tipo

// let itemId: string = productName;
// Tem outra forma de fazer
let itemId = <string>productName;
console.log(age);
