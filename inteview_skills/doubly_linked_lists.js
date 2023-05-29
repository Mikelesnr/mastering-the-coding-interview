#!/usr/bin/env node

class DoublyLinkedList {
    constructor(value){
        this.head ={
            value : 10,
            next : null,
            prev: null 
        }
    
    this.tail = this.head;
    this.length = 1;
    }

    append(value){
        const newNode = {value:value, next: null, prev: null};
        newNode.prev = this.tail;
        this.tail.next=newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value){
        const newNode = {value:value, next: null, prev: null};
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert (index, value){
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToindex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList();
    } 

    traverseToindex(index) {
        //check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode =currentNode.next;
            counter++;
        }
        return currentNode; 
    }

    remove(index){
        const leader = this.traverseToindex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(1)
myLinkedList.append(16);
console.log(myLinkedList.append(5));
myLinkedList.insert(1,99)
console.log(myLinkedList.printList());
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(1,99));
