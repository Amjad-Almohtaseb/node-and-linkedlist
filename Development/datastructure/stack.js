class Node {
  constructor(color, number, next) {
    this.color = color;
    this.number = number;

    this.next = next;
  }
  getData() {
    return `${this.color} - ${this.number}`;
  }
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.limit = limit;
    this.size = 0;
  }
  isEmpty = () => this.siza === 0;
  isFull = () => this.size === this.limit;
  peak = () => this.top.getData();
  pop = () => {
    if (this.isEmpty()) {
      console.log("the stack is empty");
    } else {
      //change top node to the next node of the old top
      const removedNode = this.top;
      this.top = removedNode.next;
      //decrement the size
      this.size--;
      // return the old top
      return removedNode.getData();
    }
  };

  push = (color, number) => {
    //push a 20 card to my stack(deck)
    if (this.isFull()) {
      console.log(`Your stack is full`);
    } else {
      //create nw node
      const newNode = new Node(color, number);
      //link it to the old top
      newNode.next = this.top;
      ////make it the new top
      this.top = newNode;

      // increase size
      this.size++;
    }
  };
  displayData = () => {
    //this fn to appeare all nodes(objects)
    let currentNode = this.top;
    while (currentNode) {
      console.log(
        `color : ${currentNode.color} ,number : ${currentNode.number}`
      );
      currentNode = currentNode.next;
    }
  };
}

const colors = ["red", "blue", "green", "Yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const random = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
const cardsStack = new Stack(20);
const cardsArray = [];

while (!cardsStack.isFull()) {
  //random number
  const number = random(numbers);
  // random color
  const color = random(colors);
  //check if its exists
  if (!cardsArray.includes(`${color},${number}`)) {
    //push
    cardsStack.push(color, number);
    cardsArray.push(`${color},${number}`);
  }
}
console.log("deck : ");
cardsStack.displayData();
let player1 = [];
let player2 = [];
let i = 0;
while (i < 5) {
  player1.push(cardsStack.pop());
  player2.push(cardsStack.pop());
  i++;
}
console.log(cardsStack.peak());
console.log("player 1 cards :", player1);
console.log("player 2 cards :", player2);
