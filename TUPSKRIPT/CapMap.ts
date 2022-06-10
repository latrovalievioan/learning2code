type A = {
  a: 'gosho'
  b: 'pesho'
}

// Implement CapMap
type CapMap<T> = {
  [Property in keyof T]: T[Property] extends string ? Capitalize<T[Property]> : T[Property]
}

type x = CapMap<A> // { a: "Gosho"; b: "Pesho" }
