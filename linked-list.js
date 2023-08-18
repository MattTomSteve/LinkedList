/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return undefined

    const removeFirst = this.head;
    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return removeFirst.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is invalid.');
    }

    current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is invalid.');
    }
    
    current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is invalid.');
    }

    if (idx === 0) {
      this.unshift(val);
      return;

    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;

    for(let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;

    return;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is invalid.');
    }

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }
    
    let current = this.head;

    for (let i = 0; i < idex - 1; i++) {
      current = current.next;

    const RemoveAt = current.next;
    current.next = RemoveAt.next;
    this.length--;

    return RemoveAt.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is invalid.');
    }

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
