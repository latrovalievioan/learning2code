type Head<T extends any[]> = T extends [infer F, ...infer R] ? F : never
type x = Head<[1, 2, 3]> // 1
type y = Head<[]> // never
type z = Head<["a", "b"]> // "a"


type Tail<T extends any[]> = T extends [infer F, ...infer R] ? R : never
type x1 = Tail<[1, 2, 3]> // [2, 3]
type x2 = Tail<[]> // []
type x3 = Tail<["a"]> // []





