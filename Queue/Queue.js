// js에서는 Quque를 자체 제공하지 않음
// 배열을 이용해서 큐의 기능을 흉내

// 삽입O(1)  삭제O(1)  접근O(1)  n번째 접근O(n)   검색O(n)

class Node{
    constructor(data){
        this.data= data;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    isEmpty(){
        return this.front===null && this.rear===null;
    }
    add(data){
        const newNode = new Node(data);
        if(this.isEmpty()) this.front=newNode;
        else this.rear.next = newNode;

        this.rear = newNode;
    }

    poll(){
        if(this.isEmpty()) return;
        this.front = this.front.next;

        if(!this.front) this.rear=null;
    }

    peekFront(){
        if(this.isEmpty()) return -404;
        return this.front.data;
    }
    display(){
        if(this.isEmpty())return;
        let curr = this.front;
        process.stdout.write("(FRONT) ");

        while(curr != this.rear){
            process.stdout.write(`${curr.data} ---> `);
            curr = curr.next;
        }
        process.stdout.write(`${this.rear.data} (REAR)\n`);
    }

}
module.exports = {Queue};

const q = new Queue();
q.add("1");
q.add("2");
q.add("3");
q.add("4");
q.add("5");
q.display();
q.poll();
q.display();

console.log(q.peekFront());