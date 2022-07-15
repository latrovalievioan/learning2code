type ExcludeFromTuple<Tuple extends any[], X> = 
  Tuple extends [infer F, ...infer R] 
    ? F extends X 
      ? ExcludeFromTuple<R, X> 
      : [F, ...ExcludeFromTuple<R, X>]
    : Tuple

type x = ExcludeFromTuple<[1, 2, 4, 3, 2], 2> // [1, 4, 3]
type y = ExcludeFromTuple<["a", 1, "b"], 5> // ["a', 1, "b"]
type z = ExcludeFromTuple<["b", "b", "b"], "b"> // []
