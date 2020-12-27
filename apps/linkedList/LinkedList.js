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
    this._root = null;
    this._tail = null;
    this._length = 0;
  }

  append(value) {
    this._length += 1;

    if (!this._root) {
      this._root = new Node_(value);
      this._tail = this._root;
      return;
    }
    this._tail.next = new Node_(value);
    this._tail = this._tail.next;
  }

  prepend(value) {
    this._root = new Node_(value, this._root);
    this._length += 1;
    if (!this._tail) {
      this._tail = this._root;
    }
  }

  at(index) {
    let current = this._root;
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
    if (!this._root) {
      this._root = new Node_(value);
      return this;
    }
    if (index <= 0) {
      this._root = new Node_(value, this._root);
      return this;
    }
    let current = this._root.next;
    let prev = this._root;
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
    let current = this._root;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let prev = null;
    let curr = this._root;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    [this._root, this._tail] = [this._tail, this._root];
    return this;
  }

  remove(value) {
    if (!this._root) {
      return;
    }
    if (value === this._root.value) {
      this._root = this._root.next;
      this._length--;
    }
    let current = this._root;
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
      this._tail = prev;
      this._length--;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this._root = this._root.next;
      this._length--;
      return;
    }
    let prev = this._root;
    let current = this._root.next;
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
      this._tail = prev;
      prev.next = null;
      this._length--;
    }
  }

  slice(from = 0, to = this.length) {
    let newList = new List();
    let current = this._root;
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

  ///_tail needs fixing ----- ask KON
  drop(fun) {
    if (!this._root) {
      return;
    }
    while (fun(this._root.value)) {
      this._root = this._root.next;
      this._length--;
      if (!this._root) break;
    }
    let prev = this._root;
    if (this._root) {
      let current = this._root.next;
      while (current) {
        while (fun(current.value)) {
          prev.next = current.next;
          this._length--;
          if (!current.next) break;
          current = current.next;
        }
        this._tail = current;
        prev = current;
        current = current.next;
      }
    }
  }

  reduceLeft(fun, initialValue) {
    let result = initialValue;
    let current = this._root;
    if (arguments.length < 2 && this._root) {
      result = this._root.value;
      current = this._root.next;
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
    if (!this._root) return;
    let secondHalf = new List();
    secondHalf._tail = this._tail;
    let slow = this._root;
    let fast = this._root;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    this._tail = slow;
    secondHalf._root = slow.next;
    secondHalf._length = Math.floor(this._length / 2);
    this._length = Math.ceil(this._length / 2);
    slow.next = null;
    return secondHalf;
  }

  changeValueAt(index, value) {
    let current = this._root;
    let i = 0;
    if (!current) {
      return undefined;
    }
    while (current.next) {
      if (index === i) {
        current.value = value;
      }
      current = current.next;
      i++;
    }
    if (i === index) {
      current.value = value;
    }
  }
}
