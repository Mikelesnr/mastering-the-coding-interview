#!/usr/bin/env node

class Stack{
    constructor(){
        this.arr = [];
    }
  

    peek(){
        if (!this.arr.length){
            return "the stack is empty"
        }
        return this.arr[this.arr.length-1];
    }

    push(value){
        this.arr.push(value);
        return this.arr;
    }

    pop(){
        if (!this.arr.length){
            return this.isEmpty();
        }
        this.arr.pop();
        return this.arr;
    }

    isEmpty(){
        if (!this.arr.length){
            return "the stack is empty"
        }
        return `the stack has ${this.arr.length} items`
    }
}

const myStack = new Stack();
console.log(myStack.pop());
console.log(myStack.isEmpty())
myStack.push("google");
myStack.push("udemy");
console.log(myStack.peek());
myStack.push("discord");
console.log(myStack.isEmpty())
console.log(myStack.pop());
console.log(myStack.isEmpty())
console.log(myStack.peek());
