// changing modifiable interface to readonly
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// changing readonly interface to modifiable
type Modifiable<T> = {
  -readonly [P in keyof T]: T[P];
};

// changing interface to optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};


class Person {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

type RemoveProps<T, K> = Exclude<T, K>;
// type Person but without name and age
type RemainProps<T, K> = Exclude<keyof T, K>;
type PersonBlindAuditions = Omit<Person01, 'name' | 'age'>;
const p: PersonBlindAuditions = { id: 1 };
