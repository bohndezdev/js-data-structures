class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    const newNode = new Node(value, this.head, null);
    if(this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  push(value) {
    const newNode = new Node(value, null, this.tail);
    if(this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
}

const myList = new DoublyLinkedList();
console.log(myList);
myList.unshift(10);
myList.unshift(20);
myList.unshift(30);

myList.push(3);
console.log(myList);
