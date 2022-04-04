/* HINTS:
 * look at the types
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 *
 */

const debug = <T>(gen: IterableIterator<T>, ...args: any[]) => console.log([...gen], ...args)

function* range(start: number, end: number) {
  while (start < end) yield start++
}

/**
 * @description
 * creates a generator that yields the provided x param count times
 *
 * @param x - the value that will be yielded
 * @param count - how many times to yield x before terminating
 */
function* repeat<T>(x: T, count: number = Infinity): Generator<T> {
  for(let i = 0; i < count; i++){
    yield x
  }
}

const xs = repeat(10, 5)
debug(xs, `repeat`) // [10, 10, 10, 10, 10]

/**
 * @description
 * returns a new generator with the `map_fn` function applied to
 * each yielded valu
 *
 * @param gen - the generator which is mapped over
 * @param map_fn - the function which will map over gen
 */
function* map<T, R>(gen: IterableIterator<T>, map_fn: (x: T) => R): Generator<R> {
  for (const x of gen){
    yield map_fn(x)
  } 
} 

const powers = map(range(1, 5), x => x ** 2)
debug(powers, `map`) // [1, 4, 9, 16]

/**
 * @description
 * skips a number of yielded values from the provided generator
 *
 * @param gen - the generator from which to skip values
 * @param count - the number of values to skip
 */
function* skip<T>(gen: IterableIterator<T>, count: number): Generator<T> {
  for(let i = 0; i < count; i++){
    gen.next()
  }
  for(const x of gen) yield x
}

const without_first_2 = skip(range(3, 7), 2)
debug(without_first_2, `skip`) // [5, 6]

/**
 * @descrption
 * Yields the first count values of the provided generators.
 * If the generator is exhausted before count values are yielded,
 * the returned generator should also be exhausted
 *
 * @param gen - the generator from which to yield the values
 * @param count - the number of values to yield from the generator
 */
function* take<T>(gen: IterableIterator<T>, count: number): Generator<T> {
  for(let i = 0; i < count; i++){
    const {done, value} = gen.next()
    if(done) {
      break
    }
    yield value
  }
}

debug(take([0, 2, 3, 4, 5].values(), 20), `take`) // [1, 2, 3]

/**
 * @description
 * combines two generators into a single generator which contains pairs
 * made up of the respective pairs of yielded values from both generators.
 * If any of the input generators is exhausted, the returned generator is also exhausted
 *
 * @param left - the generator from which the first pair value comes
 * @param right - the generator from which the second pair value comes
 */
function* zip<L, R>(left: IterableIterator<L>, right: IterableIterator<R>): Generator<[L, R]> {
  for(;;){
    const lN = left.next()
    const rN = right.next()
    if(lN.done || rN.done) break
    yield [lN.value, rN.value]
  }
}

const pairs = zip([1, 2, 3, 4].values(), [`a`, `b`, `c`].values())
debug(pairs, `zip`) // [[1, `a`], [2, `b`], [3, `c`]]

/**
 * @description
 * yields all fibonacci numbers
 */
function* fibs(): Generator<number> {
  yield 0
  let n1 = 0
  let n2 = 1
  for(;;){
    yield n1 + n2
    const temp = n1
    n1 = n2
    n2 = temp + n2
  }
}

debug(take(fibs(), 100), `fibs`) // [0,1,1,2,3,5,8,13,21,34]
