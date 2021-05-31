const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  traverse = () => {
    // to put the root node in our array
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
  searchForParent = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      if (child.name.split(" ")[1] === current.name.split(" ")[0]) {
        return current;
      }
      nodes = [...nodes, ...current.children];
    }
    return "parent does not exist";
  };

  addChild = (child) => {
    if (this.children.length < 2) {
      this.children.push(child);
      console.log(`child ${child.name} has been added`);
    } else console.log("child is an orphan");
  };
}

let childName = prompt("enter child full name (DONE if finished:)");
const root = new TreeNode("family");
while (childName.toUpperCase() !== "DONE") {
  //create new child node
  let child = new TreeNode(childName);
  //look for its parents
  let parent = root.searchForParent(child);
  //find it and add child i children <2
  if (parent != "parent does not exist") {
    //add the child
    parent.addChild(child);
  } else console.log(parent);
  childName = prompt("enter child full name (DONE if finished:)");
}
root.traverse();
