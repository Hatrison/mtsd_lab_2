const LinkedList = require("./List");

describe("Testing doubly linked list", () => {
  test("Testing append method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.head).not.toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.head.next.value).toBe("b");

    expect(list.getNode(1).prev.value).toBe("a");
    expect(list.getNode(1).next.value).toBe("c");

    expect(list.tail).not.toBeNull();
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev.value).toBe("b");
  });

  test("Testing length method", () => {
    const list = new LinkedList();

    expect(list.length()).toBe(0);

    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.length()).toBe(3);
  });

  test("Testing insert method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("c");

    list.insert("b", 1);

    expect(list.get(-1)).toBeUndefined();
    expect(list.get(5)).toBeUndefined();

    expect(list.get(1)).toBe("b");
    expect(list.getNode(1).prev.value).toBe("a");
    expect(list.getNode(1).next.value).toBe("c");
    expect(list.getNode(0).next.value).toBe("b");
    expect(list.getNode(2).prev.value).toBe("b");
  });

  test("Testing delete method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    const deletedCharacter = list.delete(1);

    expect(deletedCharacter).toBe("b");

    expect(list.delete(-1)).toBeUndefined();
    expect(list.delete(5)).toBeUndefined();

    expect(list.getNode(0).next.value).toBe("c");
    expect(list.getNode(0).prev).toBeNull();
    expect(list.getNode(1).prev.value).toBe("a");
    expect(list.getNode(1).next).toBeNull();
  });

  test("Testing deleteAll method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    list.deleteAll("a");

    expect(list.length()).toBe(2);

    expect(list.getNode(0).value).toBe("b");
    expect(list.getNode(1).value).toBe("c");
    expect(list.findFirst("a")).toBe(-1);

    list.deleteAll("f");
    expect(list.getNode(0).value).toBe("b");
    expect(list.getNode(1).value).toBe("c");
  });

  test("Testing get method", () => {
    const list = new LinkedList();

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
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    const clonedList = list.clone();

    expect(list.head).not.toBe(clonedList.head);
    expect(list.head.next).not.toBe(clonedList.head.next);
    expect(list.head.value).toBe(clonedList.head.value);
    expect(list.get(1)).toBe(clonedList.get(1));
  });

  test("Testing reverse method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    list.reverse();

    expect(list.get(0)).toBe("c");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("a");

    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  });

  test("Testing findFirst method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    expect(list.findFirst("a")).toBe(0);
    expect(list.findFirst("f")).toBe(-1);
  });

  test("Testing findLast method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");

    expect(list.findLast("a")).toBe(3);
    expect(list.findLast("f")).toBe(-1);
  });

  test("Testing clear method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    list.clear();

    expect(list.length()).toBe(0);

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("Testing extend method", () => {
    const list = new LinkedList();

    list.append("a");
    list.append("b");
    list.append("c");

    const list2 = new LinkedList();

    list2.append("d");
    list2.append("f");

    list.extend(list2);

    expect(list.length()).toBe(5);
    expect(list2.length()).toBe(2);

    expect(list.getNode(2).next.value).toBe("d");
    expect(list.getNode(3).prev.value).toBe("c");
  });
});
