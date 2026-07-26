// Aprendendo sobre o type em objectos
// O type é basicamente um objecto que podemos definir
// quais propriedades o objecto vai ter e quais são os tipos dessa respectivas propriedades.

type Order = {
  productId: string;
  price: number;
};
// Usamos a ? para deixar propriedades opcionais, porque por padrão elas são todas obrigatórias!
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  //   orders: string[]; //Definimos aqui uma lista de strings;
  orders: Order[]; //Definimos aqui uma lista de strings;
};

const user: User = {
  firstName: "Mário",
  age: 25,
  email: "Mariosoares20052001@gmail.com",
  orders: [
    {
      productId: "1",
      price: 1000,
    },
  ],
};

// unions
type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Mário",
  age: 25,
  books: ["Js", "React"],
  email: "Mn@gmail.com",
  orders: [{ productId: "2", price: 12000 }],
};
