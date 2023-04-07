const List = require("./List");

describe("Testing doubly linked list", () => {
  test("Testing append method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("Testing length method", () => {
    const list = new List();

    expect(list.length()).toBe(0);

    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.length()).toBe(3);
  });

  test("Testing insert method", () => {
    const list = new List();

    list.append("a");
    list.append("c");

    list.insert("b", 1);

    expect(list.get(-1)).toBeUndefined();
    expect(list.get(5)).toBeUndefined();

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("Testing delete method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    const deletedCharacter = list.delete(1);

    expect(deletedCharacter).toBe("b");

    expect(list.delete(-1)).toBeUndefined();
    expect(list.delete(5)).toBeUndefined();

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
  });

  test("Testing deleteAll method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    list.deleteAll("a");

    expect(list.length()).toBe(2);

    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.findFirst("a")).toBe(-1);

    list.deleteAll("f");
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
  });

  test("Testing get method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.get(-1)).toBeUndefined();
    expect(list.get(5)).toBeUndefined();

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("Testing clone method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    const clonedList = list.clone();

    expect(list.array).not.toBe(clonedList.array);
    expect(list.get(1)).toBe(clonedList.get(1));
  });

  test("Testing reverse method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    list.reverse();

    expect(list.get(0)).toBe("c");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("a");
  });

  test("Testing findFirst method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    expect(list.findFirst("a")).toBe(0);
    expect(list.findFirst("f")).toBe(-1);
  });

  test("Testing findLast method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    expect(list.findLast("a")).toBe(3);
    expect(list.findLast("f")).toBe(-1);
  });

  test("Testing clear method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    list.clear();

    expect(list.length()).toBe(0);
  });

  test("Testing extend method", () => {
    const list = new List();

    list.append("a");
    list.append("b");
    list.append("c");

    const list2 = new List();

    list2.append("d");
    list2.append("f");

    list.extend(list2.array);

    expect(list.length()).toBe(5);
    expect(list2.length()).toBe(2);

    expect(list.get(2)).toBe("c");
    expect(list.get(4)).toBe("f");
  });
});
