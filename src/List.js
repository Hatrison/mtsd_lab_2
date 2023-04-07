class List {
  constructor(array = []) {
    this.array = [...array];
  }

  length() {
    return this.array.length;
  }

  append(element) {
    this.array.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.array.length) {
      console.log("Invalid index");
      return;
    }

    this.array.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index > this.array.length - 1) {
      console.log("Invalid index");
      return;
    }

    return this.array.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.array = this.array.filter((item) => item !== element);
  }

  get(index) {
    if (index < 0 || index > this.array.length - 1) {
      console.log("Invalid index");
      return;
    }

    return this.array[index];
  }

  clone() {
    return new List(this.array);
  }

  reverse() {
    this.array.reverse();
  }

  findFirst(element) {
    return this.array.indexOf(element);
  }

  findLast(element) {
    return this.array.lastIndexOf(element);
  }

  clear() {
    this.array.length = 0;
  }

  extend(elements) {
    this.array = [...this.array, ...elements];
  }
}

module.exports = List;
