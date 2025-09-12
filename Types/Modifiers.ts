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
