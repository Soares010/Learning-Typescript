"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Decalarando uma variável em typescript
let age = 5;
const firstName = "Mário";
const isValid = true;
// any é o tipo que aceita qualquer tipo de dado que é atribuído à
// varável
let idk = 5;
idk = "5";
// Isso aqui define que ids vai ser uma lista de números!
const ids = [1, 2, 3, 4, 5];
// Tupla -> Ele se parece com um array convencional mas não é
// Ele tem que ser implementado de acordo a ordem estabelecida
// na tipegem dentro dos colchetes, se assim não for ele dará erro
const person = [12, "Mário"];
// Lista de tuplas
const people = [
    [1, "Mário"],
    [2, "Euclides"],
    [3, "Aldair"],
    [4, "Selton"],
];
// Aprendendo sobre intersections(Interseções)
// É nada mais nada menos quando a gente quer que uma
// Variável use um tipo ou outro Ex:
const productId = "12";
// Aprendendo sobre o Enum
// é um recurso que permite definir um conjunto de constantes nomeadas
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
// Assim esse direction vale 1
const direction = Direction.Up;
console.log(direction);
// Aprendendo sobre type assertions
// É basicamento quando a gente quer mudar o tipo de uma variável, ou tratar uma variável que é de um tipo como um tipo diferente!
const productName = "Boné";
// Eu quero tratar essa variável como um outro tipo
// let itemId: string = productName;
// Tem outra forma de fazer
let itemId = productName;
console.log(age);
//# sourceMappingURL=index.js.map