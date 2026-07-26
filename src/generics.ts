// Generics é basicamente uma forma de passar tipos como parâmetros, para deixar a tipagem de funções mais dinâmica

// const returnValue = (value: any) => value;

// const message = returnValue("Hello World");
// const count = returnValue(5);

// Aqui o Type é o tipo da variável que depois atribuímos ao parâmetro da função, deixando a função bem mais dinâmica!
const returnValue = <Type>(value: Type): Type => value;

const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);

function getFirstValueFromArray<GenericType>(array: GenericType[]) {
  return array[0];
}
// Pode se receber mais de 1 generic
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// O generic Promise

const returnPromise = async (): Promise<number> => {
  return 5;
};

// Generic em classes

class GenericNumber<Type> {
  zeroValue: any;
  add: (x: Type, y: Type) => Type;

  constructor(zeroValue: Type, add: (x: Type, y: Type) => Type) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
