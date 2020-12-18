class Node_ {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class List {
  static from(xs) {
    const list = new List();
    xs.forEach((x) => list.append(x));
    return list;
  }

  static of(...xs) {
    return List.from(xs);
  }

  constructor() {
    this.root = null;
    this.tail = null;
    this._length = 0;
  }

  append(value) {
    this._length += 1;

    if (!this.root) {
      this.root = new Node_(value);
      this.tail = this.root;
      return;
    }
    this.tail.next = new Node_(value);
    this.tail = this.tail.next;
  }

  prepend(value) {
    this.root = new Node_(value, this.root);
    this._length += 1;
    if (!this.tail) {
      this.tail = this.root;
    }
  }

  at(index) {
    let current = this.root;
    let i = 0;
    if (!current) {
      return undefined;
    }
    while (current.next) {
      if (index === i) {
        return current.value;
      }
      current = current.next;
      i++;
    }
    if (i === index) {
      return current.value;
    }
  }

  insert(index, value) {
    this._length += 1;
    if (!this.root) {
      this.root = new Node_(value);
      return this;
    }
    if (index <= 0) {
      this.root = new Node_(value, this.root);
      return this;
    }
    let current = this.root.next;
    let prev = this.root;
    let i = 0;
    while (current && i < index - 1) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = new Node_(value, current);
    return this;
  }

  get length() {
    return this._length;
  }

  toArray() {
    const arr = [];
    let current = this.root;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let prev = null;
    let curr = this.root;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    [this.root, this.tail] = [this.tail, this.root];
    return this;
  }

  remove(value) {
    if (!this.root) {
      return;
    }
    if (value === this.root.value) {
      this.root = this.root.next;
      this._length--;
    }
    let current = this.root;
    let prev = null;
    while (current.next) {
      if (value === current.value) {
        prev.next = current.next;
        this._length--;
        return;
      }
      prev = current;
      current = current.next;
    }
    if (value === current.value) {
      prev.next = current.next;
      this.tail = prev;
      this._length--;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.root = this.root.next;
      this._length--;
      return;
    }
    let prev = this.root;
    let current = this.root.next;
    let i = 1;
    while (current.next) {
      if (i === index) {
        prev.next = current.next;
        this._length--;
        return;
      }
      i++;
      prev = current;
      current = current.next;
    }
    if (i === index) {
      this.tail = prev;
      prev.next = null;
      this._length--;
    }
  }

  slice(from = 0, to = this.length) {
    let newList = new List();
    let current = this.root;
    let i = 0;
    while (current) {
      if (i >= from && i < to) {
        newList.append(current.value);
      }
      current = current.next;
      i++;
    }
    return newList;
  }

  ///tail needs fixing ----- ask KON
  drop(fun) {
    if (!this.root) {
      return;
    }
    while (fun(this.root.value)) {
      this.root = this.root.next;
      this._length--;
      if (!this.root) break;
    }
    let prev = this.root;
    if (this.root) {
      let current = this.root.next;
      while (current) {
        while (fun(current.value)) {
          prev.next = current.next;
          this._length--;
          if (!current.next) break;
          current = current.next;
        }
        this.tail = current;
        prev = current;
        current = current.next;
      }
    }
  }

  reduceLeft(fun, initialValue) {
    let result = initialValue;
    let current = this.root;
    if (arguments.length < 2 && this.root) {
      result = this.root.value;
      current = this.root.next;
    }
    while (current) {
      result = fun(result, current.value);
      current = current.next;
    }
    return result;
  }

  toString() {
    return `List {${list.reduceLeft((a, b) => `${a} -> ${b}`) || ``}}`;
  }

  halfSplit3() {
    if (!this.root) return;
    let secondHalf = new List();
    secondHalf.tail = this.tail;
    let slow = this.root;
    let fast = this.root;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    this.tail = slow;
    secondHalf.root = slow.next;
    secondHalf._length = Math.floor(this._length / 2);
    this._length = Math.ceil(this._length / 2);
    slow.next = null;
    return secondHalf;
  }
}
