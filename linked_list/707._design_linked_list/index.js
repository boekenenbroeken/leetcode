function Node(value) {
  this.value = value;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.length <= index || index < 0) return -1;

  if (index === 0) return this.head.value;

  let curr = this.head;
  let counter = 0;

  while (curr) {
    if (counter === index) {
      return curr.value;
    }

    counter++;
    curr = curr.next;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (value) {
  const node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  this.length++;

  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (value) {
  const node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.length++;

  return this;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, value) {
  if (index < 0 || index > this.length) return;

  if (index === 0) return this.addAtHead(value);
  if (index === this.length) return this.addAtTail(value);

  const node = new Node(value);

  let curr = this.head;
  let counter = 0;

  while (curr) {
    if (counter === index - 1) {
      node.next = curr.next;
      curr.next = node;
      this.length++;

      return this;
    }

    counter++;
    curr = curr.next;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0) return;

  let curr = this.head;
  let counter = 0;

  if (index === 0) {
    this.head = this.head.next;
    this.length--;

    if (!this.length) this.tail = null;

    return;
  }

  while (curr) {
    if (counter === index - 1) {
      curr.next = curr.next.next;
    }

    if (!curr?.next) {
      this.tail = curr;
    }

    curr = curr.next;
    counter++;
  }

  this.length--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
