class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue{
      constructor(limit=10, front=null, back=null){