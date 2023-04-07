class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }

  append(element) {
    const newNode = new Node(element);

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.prev = this.tail;
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  insert(element, index) {
    const length = this.length();

    if (index < 0 || index > length) {
      console.log("Invalid index");
      return;
    }

    if (index === length) {
      this.append(element);
      return;
    }

    const prev = this.getNode(index - 1);
    const next = prev.next;
    const newNode = new Node(element, next, prev);
    prev.next = newNode;
    next.prev = newNode;
  }

  delete(index) {
    const length = this.length();

    if (index < 0 || index >= length) {
      console.log("Invalid index");
      return;
    }

    let value;

    if (index === 0) {
      value = this.head.value;
      const next = this.head.next;
      next.prev = null;
      this.head = next;
    } else if (index === length - 1) {
      value = this.tail.value;
      const prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
    } else {
      const node = this.getNode(index);
      value = node.value;
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
    }

    return value;
  }

  deleteAll(element) {
    let index = this.findFirst(element);

    while (index !== -1) {
      this.delete(index);
      index = this.findFirst(element);
    }
  }

  getNode(index) {
    if (index < 0 || index >= this.length()) {
      console.log("Invalid index");
      return;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      counter++;
      current = current.next;
    }

    return current;
  }

  get(index) {
    return this.getNode(index)?.value;
  }

  clone() {
    const list = new LinkedList();

    if (this.head) {
      let counter = 0;
      let current = this.head;

      const length = this.length();
      while (counter < length) {
        list.append(current.value);
        current = current.next;
        counter++;
      }
    }

    return list;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      prev = current.prev;

      current.next = prev;
      current.prev = next;

      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  findFirst(element) {
    if (!this.head) return -1;

    let index = 0;
    let current = this.head;

    while (current?.value !== element) {
      if (index === this.length()) {
        return -1;
      }

      index++;
      current = current.next;
    }

    return index;
  }

  findLast(element) {
    if (!this.head) return -1;

    let index = this.length() - 1;
    let current = this.tail;

    while (current?.value !== element) {
      if (index === -1) {
        break;
      }

      index--;
      current = current.prev;
    }

    return index;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(elements) {
    if (!elements.head) return;

    const cloneOfElements = elements.clone();

    if (!this.head) {
      this.head = cloneOfElements.head;
      this.tail = cloneOfElements.tail;
      return;
    }

    cloneOfElements.head.prev = this.tail;
    this.tail.next = cloneOfElements.head;
    this.tail = cloneOfElements.tail;
  }
}

module.exports = LinkedList;
