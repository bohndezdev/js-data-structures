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

  shift() {
    if(!this.head) { return null; }     // If the list was empty.

    const nodeValue = this.head.value;  // Save the node value before remove it.
    this.head = this.head.next;         // Now the head will be the next node.

    if(this.head) {                     // If the new head has a node.
      this.head.prev = null;            // The previous node will be null.
    } else {                            // If the new head is null.
      this.tail = null                  // The tail will be null too because the list is empty.
    }

    return nodeValue;                   // Return the value of the removed node.
  }
}

const myList = new DoublyLinkedList();
console.log(myList);
myList.unshift(10);
myList.unshift(20);
myList.unshift(30);

myList.push(3);
console.log(myList);
