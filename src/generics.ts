// Generics é basicamente uma forma de passar tipos como parâmetros, para deixar a tipagem de funções mais dinâmica

// const returnValue = (value: any) => value;

// const message = returnValue("Hello World");
// const count = returnValue(5);

// Aqui o Type é o tipo da variável que depois atribuímos ao parâmetro da função, deixando a função bem mais dinâmica!
const returnValue = <Type>(value: Type): Type => value;

const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);
