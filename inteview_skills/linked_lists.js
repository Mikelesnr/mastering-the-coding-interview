#!/usr/bin/env node

class LinkedList {
    constructor(value){
        this.head ={
            value : 10,
            next : null
        }
    
    this.tail = this.head;
    this.length = 1;
    }

    append(value){
        const newNode = {value:value, next: null};
        this.tail.next=newNode;
        this.tail = this.tail.next;
        this.length++;
        return this
    }

    prepend(value){
        const newNode = {value:value, next: null};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    insert (index, value){
        if (index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
    }

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
