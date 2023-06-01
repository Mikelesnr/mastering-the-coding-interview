#!/usr/bin/env node

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        if(!this.length){
            return this.isEmpty();
        }
        return this.first.value;
    }

    enqueue(input){
        const newNode = {
            value: input,
            next: null
        }
        if(!this.length){
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this; 
    }

    dequeue(){
        if(!this.length){
            return this.isEmpty()
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    isEmpty(){
        if (!this.length){
            return "the queue is empty"
        }
        return `the queue has ${this.length} items`
    }    
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue("Mike");
myQueue.enqueue("Langton");
myQueue.enqueue("James");
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());