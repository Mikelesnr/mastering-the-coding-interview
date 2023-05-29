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
            next: null
        };
        const leader = this.traverseToindex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
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

    reverse() {
        if (!this.head.next) {
            return this. head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1,99);
console.log(myLinkedList.reverse());
