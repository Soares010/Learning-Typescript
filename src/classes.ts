// Misturando interfaces com classes
interface IPerson {
  id: number;

  sayMyName(): string;
}

// Colocando modificadores nos atributos
class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

const person = new Person(1, "Mário", 21);

// Criando outra classe
class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    // O super em TypeScript é uma palavra-chave usada na orientação a objetos para chamar o construtor da classe paiou acessar métodos e propriedades da classe base
    super(id, name, age);
  }
  whoAmI() {
    return this.name;
  }
}
