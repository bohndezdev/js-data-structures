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
    if(!this.head) { return null; }        // If the list was empty.

    const oldHeadValue = this.head.value;  // Save the node value before remove it.
    this.head = this.head.next;            // Now the next node of the current head will be the head.

    if(this.head) {                        // If the new head has a node.
      this.head.prev = null;               // The previous node will be null.
    } else {                               // If the new head is null.
      this.tail = null;                    // The tail will be null too because the list is empty.
    }

    return oldHeadValue;                   // Return the value of the removed node.
  }

  pop() {
    if(!this.tail) { return null; }        // If list is empty.

    const oldTailValue = this.tail.value;  // Save current tail value to return it at the end.
    this.tail = this.tail.prev;            // Change the current tail for the previous node.

    if(this.tail) {                        // If the new tail exists.
      this.tail.next = null;               // The next node of the new tail will be null. 
    } else {                               // If the new tail is null.
      this.head = null;                    // The head will be null too because the list is empty.
    }

    return oldTailValue;                   // Return the value of the old
  }

}

// New List
const myList = new DoublyLinkedList();
console.log(myList);

// Adding nodes at the begining
myList.unshift('manzana');
myList.unshift('plátano');
console.log(myList);

// Add 2 nodes to the and
myList.push('melón');
myList.push('sandía');
console.log(myList);

// Removing first node
console.log(myList.shift());
console.log(myList);

// Removing last node
console.log(myList.pop());
console.log(myList);
