#!/usr/bin/env node

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        if (!this.length){
            return "stack is empty"
        }
        return this.top.value;

    }

    push(input){
        const newNode = {value: input, prev : null};
        if(!this.length){
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
            return this
        }

        newNode.prev = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop(){
        if (!this.top){
            return this.isEmpty();
        }
        if (this.top === this.bottom){
            this.top=null;
            this.bottom= null;
            this. length--;
            return this
        }
        this.top = this.top.prev;
        this.length--;
        return this

    }

    isEmpty(){
        if (!this.length){
            return "the stack is empty"
        }
        return `the stack has ${this.length} items`
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty())
// myStack.push("google");
// myStack.push("udemy");
console.log(myStack.peek());
myStack.push("discord");
console.log(myStack.isEmpty())
console.log(myStack.pop());
console.log(myStack.isEmpty())
console.log(myStack.peek());