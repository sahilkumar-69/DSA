class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  prepent(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) current = current.next;

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  countIteratively() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  countRecursively(head) {
    if (head === null) return 0;

    return 1 + this.countRecursively(head.next);
  }

  print() {
    let current = this.head;

    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  removeFromPosition(position) {
    let temp = this.head;

    if (position < 1 || position > this.size) {
      return 0;
    }
    let deleted = null;
    if (position === 1) {
      deleted = this.head;
      this.head = this.head.next;
      return deleted;
    }

    let prev = null;
    for (let i = 1; i < position; i++) {
      prev = temp;
      temp = temp.next;
    }

    deleted = prev.next;
    prev.next = temp.next;

    return deleted;
  }

  getKthElement(k) {
    let current = this.head;
    let count = 1;

    while (current) {
      if (count == k) return current.value;
      count++;
      current = current.next;
    }

    return -1;
  }

  KthFromLast(k) {
    let current = this.head;
    if (k > this.size || k == 0) return -1;
    let countTill = 1;
    let temp;
    while (countTill !== this.size - (k - 1)) {
      current = current.next;
      countTill++;
    }

    return current.value;
  }

  reverseIterativeApproach() {
    let curr = this.head;
    let prev = null;
    let nxt;

    while (curr !== null) {
      nxt = curr.next;

      curr.next = prev;

      prev = curr;

      curr = nxt;
    }
    // curr.next = prev;
    this.head = prev;
    // return this.head
    // this.print();
  }

  reverseRecursiveApproach(head) {
    // this method will reverse the given list and return new pointer to the reversed list
    if (head === null || head.next == null) {
      return head;
    }

    let rest = this.reverseRecursiveApproach(head.next);

    head.next.next = head;

    head.next = null;

    return rest;
  }

  reverseUsingStack() {
    // Using Stack - O(n) Time and O(n) Space

    let stack = [];
    let temp = this.head;

    while (temp) {
      stack.push(temp);
      temp = temp.next;
    }

    if (stack.length) {
      temp = stack.pop();
      this.head = temp;

      while (stack.length) {
        temp.next = stack.pop();
        temp = temp.next;
      }

      temp.next = null;
    }
    return this.head;
  }

  findMiddle() {
    // naive approach Two Passes - O(n) Time and O(1) Space

    let count = 0;
    let curr = this.head;

    while (curr) {
      curr = curr.next;
      count++;
    }

    let middle = Math.floor(count / 2);

    curr = this.head;
    while (middle) {
      curr = curr.next;
      middle--;
    }
    return curr;
  }

  findMiddle2() {
    // using fast and slow pointer
    // Hare and Tortoise Algorithm - O(n) Time and O(1) Space

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }
}

const ll = new LinkedList();

ll.append(10);
ll.append(20);
// ll.append(20);
// ll.append(20);
ll.append(40);
// ll.append(40);
// ll.append(40);
ll.append(50);
// ll.append();

// console.log(ll.reverseUsingStack());
// console.log(ll.reverseRecursiveApproach(ll.head));
// console.log(ll.findMiddle2());
// ll.print();

function cycleDetection(head) {
  // Using Floyd's Cycle-Finding Algorithm  Time Complexity: O(n), space: O(1)
  let slow = (fast = head);

  while (fast && fast.next && slow) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}
// const isCycled = cycleDetection(ll);

function removeDuplicate(h) {
  let curr = h.head;

  while (curr && curr.next) {
    if (curr.value == curr.next.value) {
      curr.next = curr.next.next;
      h.size--;
    } else {
      curr = curr.next;
    }
  }
  return h;
}

function printLL(h) {
  let curr = h.head;

  let result = "";

  while (curr) {
    result += curr.value + "->";
    curr = curr.next;
  }

  console.log(result + "null");
}

// const newlist = removeDuplicate(ll);
// console.log(newlist);
// newlist.print();
// printLL(ll);

function swapNodeIteratively(head) {
  let curr = head;

  while (curr && curr.next) {
    [curr.value, curr.next.value] = [curr.next.value, curr.value];
    curr = curr.next.next;
  }

  // printLL(curr);
}

swapNodeIteratively(ll);
printLL(ll);
