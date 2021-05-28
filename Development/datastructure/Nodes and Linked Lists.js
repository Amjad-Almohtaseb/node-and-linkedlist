const prompt = require("prompt-sync")({ sigint: true });

//Class takes in age and highlight

class Node {
  constructor(age, highlight, nextNode = null) {
    this.age = age;
    this.highlight = highlight;
    this.nextNode = nextNode;
  }
}
//Creating a LinkedList whish is a data structure where each element is a node

class LinkedList {
  constructor(age, highlight) {
    this.head = new Node(age, highlight); //head is object contain age ,highlight
  }

  insertBeginning = (age, highlight) => {
    const node = new Node(age, highlight, this.head);
    //Setting node as head of LinkedList
    this.head = node;
  };
  //traverse
  getLinkList = () => {
    let current = this.head;
    //Outputting the current node
    while (current) {
      console.log(`age: ${current.age}, highlight: ${current.highlight}`);
      //Setting LinkedList head to be the next node
      current = current.nextNode;
    }
  };
  insertHighlights = (age) => {
    // Setting LinkedList head to be the current node
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      //Checking if next node exists
      if (current.nextNode && current.nextNode.age === currentAge) {
        //Setting LinkedList head to be the next node
        current = current.nextNode;
      } else {
        let highlight = prompt(`enter the highlight for year  ${currentAge}?`);

        let newNode = new Node(currentAge, highlight, current.nextNode);
        //Setting the new node as the current node
        current.nextNode = newNode;
        current = newNode;
      }
    }
  };
}
//head=7
const ageList = new LinkedList(7, "i was seven");
//head=3 => 7
ageList.insertBeginning(3, "i started walking");
//head=1=>3=>7
ageList.insertBeginning(1, "i was born");

const age = prompt(" age: ");

ageList.insertHighlights(age);

ageList.getLinkList();
