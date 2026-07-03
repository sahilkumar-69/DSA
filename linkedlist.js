class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    if (value instanceof Node) {
      if (!this.head) {
        this.head = value;
        this.size++;
        return;
      }

      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = value;
      this.size++;

      return;
    }

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

  print(head) {
    let current = head || this.head;

    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  cycleDetection() {
    let slow = (fast = this.head);

    while (fast && fast.next && slow) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
        return true;
      }
    }
    return false;
  }

  removeDuplicate() {
    let curr = this.head;

    while (curr && curr.next) {
      if (curr.value == curr.next.value) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
    return this.head;
  }

  printLinkedList() {
    let curr = this.head;

    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }

  swapNodeIteratively() {
    let curr = this.head;

    while (curr && curr.next) {
      [curr.value, curr.next.value] = [curr.next.value, curr.value];
      curr = curr.next.next;
    }
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

  findMiddle2(tempHead) {
    // using fast and slow pointer
    // Hare and Tortoise Algorithm - O(n) Time and O(1) Space

    let slow = tempHead || this.head;
    let fast = tempHead || this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  removeElements() {
    this.reverseIterativeApproach();

    let maxSeen = this.head.value;
    let current = this.head;

    while (current && current.next) {
      if (current.next.value < maxSeen) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
        maxSeen = current.value;
      }
    }

    this.reverseIterativeApproach();
  }

  removeCycle(head) {
    let slow = head;
    let fast = head;
    let isCycleExists = false;
    while (fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast == slow) isCycleExists = true;
    }

    if (isCycleExists) {
      slow = head.next;

      while (slow !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }

      fast.next = null;
    }
    return head;
  }

  mergeSort(head) {
    if (head == null || head.next == null) return head;

    let mid = this.getMiddle(head);
    let left = head;
    let right = mid.next;
    mid.next = null;

    left = this.mergeSort(left);
    right = this.mergeSort(right);

    return this.merge(left, right);
  }

  merge(left, right) {
    let dummy = new Node(0);
    let current = dummy;

    while (left && right) {
      if (left.value < right.value) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    while (left) {
      current.next = left;
      left = left.next;
      current = current.next;
    }

    while (right) {
      current.next = right;
      right = right.next;
      current = current.next;
    }

    current.next = left || right;
    return dummy.next;
  }

  getMiddle(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  zigZag() {
    let head = this.head;
    let middle = this.getMiddle(head);
    let left = head;
    let right = middle.next;
    middle.next = null;

    right = this.reverseRecursiveApproach(right);

    let next = null;
    while (left && right) {
      next = left.next;
      left.next = right;
      left = next;
      next = right.next;
      right.next = left;
      right = next;
    }
  }
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);

ll.print(ll.head);
ll.mergeSort(ll.zigZag());
ll.print(ll.head);
