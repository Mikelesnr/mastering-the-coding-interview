#!/usr/bin/env node

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null: traverse(node.left);
    tree.right = node.right === null? null: traverse(node.right);
    return tree
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while(currentNode.value > newNode.value || currentNode.value < newNode.value){
            if(currentNode.value < newNode.value){
                currentNode.right === null ? currentNode.right=newNode : 
                currentNode = currentNode.right; 
            }
            if(currentNode.value > newNode.value){
                currentNode.left === null ? currentNode.left=newNode :
                currentNode = currentNode.left; 
            }
        }
        return this
    }


    lookup(value){
        if(!this.root){
            return "tree is empty"
        }
        let currentNode = this.root;
        let found = "the node was not found";
        while(true){
            if(currentNode.value===value){
                found = "node found : " + JSON.stringify(currentNode);
                break;
            }
            if(currentNode.value < value){
                if(currentNode.right === null) break; 
                currentNode = currentNode.right; 
            }
            if(currentNode.value > value){
                if(currentNode.left === null) break;
                currentNode = currentNode.left; 
            }
        }
        return found;
    }

    remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.insert(1);
myTree.insert(6);
myTree.insert(15);
myTree.insert(170);
console.log(myTree.lookup(15));
console.log(JSON.stringify(traverse(myTree.root)));