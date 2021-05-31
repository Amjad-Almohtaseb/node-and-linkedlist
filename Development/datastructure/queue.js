// enqueue >> adding node to the queue and inside this fn we will make node object
// dequeue >> removing node from queue
// peek >> first node in the queue

class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 10) {
    this.limit = limit;
    // in intial case i dont now what is the front or back node yet.
    this.frontNode = null;
    this.backNode = null;

    //the number of node inside the queue in the intial case is 0
    this.size = 0;
    this.waitingTime = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit; //  here we use the value of limit

  peek = () => {
    if (this.isEmpty()) console.log("Empty queue!");
    else return this.frontNode;
  };

  enqueue = (groupSize) => {
    //i should ask my self what the enqueue takes in it's argument
    if (this.isFull()) {
      return "There's no place for you here ,this group can't entered now please wait,and the last group that added to this queue contain";
    } else {
      const newNode = new Node(groupSize);
      //create a node ,newNode ia an object and i will store this object inside variables.
      //newNode={groupSize :groupSize, nextNode : null};
      if (this.isEmpty()) {
        // the new node is both the front and back node
        // in this line the value this.frontNode and this.backNode null
        this.frontNode = newNode;
        this.backNode = newNode;
        // in this line the value this.frontNode and this.backNode become the same value which is the new node for eg family contain 4 human so now i insert a node for the queue

        this.waitingTime += groupSize * 0.5;
      } else {
        // link the backnode to the new node then make the newnode the backnode.
        /*this.backNode is the back node before i insert new node so here you say 
       :the next node for the previouse back node is the new node that you already insert it*/
        // in this line the value of this.backNode is the last new node in the queue and i want to add a new node
        //and link it with this node then i want to make it as a back node.

        this.backNode.nextNode = newNode;
        //delete the old value for the back node and put the new node as a back node
        this.backNode = newNode;
        this.waitingTime += groupSize * 0.5;
      }
      this.size++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("OOps! Nothing to remove.");
    } else {
      const removedNode = this.frontNode;
      if (this.size === 1) {
        this.frontNode = null;
        this.backNode = null;
        this.waitingTime = 0;
      } else {
        this.frontNode = removedNode.nextNode;
        this.waitingTime -= removedNode.groupSize * 0.5;
      }
      this.size--;
      return removedNode.groupSize;
    }
  };
}

const ride = new Queue(); // we make it to have access in the methods,and the object is the whole queue
console.log(`waiting Time when queue still empty : ${ride.waitingTime}`);
queueGroups = [15, 12, 3, 7];
let i = 0;
while (i < queueGroups.length) {
  if (!ride.isFull()) {
    while (queueGroups[i] > 12) {
      ride.enqueue(12);
      queueGroups[i] -= 12;
    }
    ride.enqueue(queueGroups[i]);
  } else {
    console.log(`${ride.enqueue()} ${queueGroups[i - 1]} people`);
    break;
  }
  i++;
}

console.log(
  `waiting Time after adding 4 groups to the queue: ${ride.waitingTime}`
);
console.log(
  `the group size for the group that removed from the queue : ${ride.dequeue()}`
);
console.log(
  `waiting Time after remove one element from the queue: ${ride.waitingTime}`
);

//6*0.5=3
//12*0.5=6
//print the waiting time for the queue
//add 4 groups to the queue (the number of people in each group is up to you)
//print the waiting time for the queue
//let the people next in line go into the ride (print out the group size)
//print the waiting time for the queue
