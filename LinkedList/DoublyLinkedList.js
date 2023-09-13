//Abstract Data Type활용
//element : 요소가 저장되는 변수
//next : 다음 노드를 저장하는 변수
//head : Node 객체 저장

//함수
//find : item을 element로 갖는 node 찾기
//findPrevious : item을 element로 갖는 node를 가리키는 node를 찾기
//append : newElement를 element로 갖는 node를 뒤에 추가
//insert : item을 element로 갖는 node 뒤에 newElement를 element로 갖는 node추가
//toString : 연결 리스트의 요소들을 출력
//remove : item을 element로 갖는 node 삭제
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
  constructor(){
    this.head = new Node("head");
  }

  append(newElement){
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.head; // 시작노드
    while(current.next !=null){ //맨 끝 노드 찾기
        current = current.next;
    }
    current.next = newNode;
  }

  find(item){
    let currentNode = this.head;
    while(currentNode.element !== item){
        currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement,item){
    let newNode= new Node(newElement);//새로운 노드 생성
    let currentNode = this.find(item); // 삽입할 위치의 노드 찾기
    console.log(newElement,item);
    if(currentNode.next == null){
      newNode.next = null;
      newNode.prev = currentNode;
      currentNode.next = newNode;
    }else{
      newNode.next=currentNode.next;
      console.log(newNode.next.element, '=' ,currentNode.next.element);
      newNode.prev=currentNode;
      console.log(newNode.prev.element, '=' ,currentNode.element);
      currentNode.next.prev = newNode;
      console.log(currentNode.next.prev.element, '=' ,newNode.element);
      currentNode.next = newNode;
      console.log(currentNode.next.element, '=' ,newNode.element);
    }
  }

  remove(item){
    let currentNode = this.find(item);
    if(currentNode.next !=null){
      currentNode.prev.next=currentNode.next;
      currentNode.next.prev=currentNode.prev;
      currentNode.next = null;
      currentNode.prev = null;
    }
  }


  toString(){
    let array = [];
    let currentNode = this.head;
    while(currentNode.next !== null){
        array.push(currentNode.next.element);
        currentNode = currentNode.next;
    }
    return array;
  }
}




function a (){
    const list = new LinkedList();
    list.insert("1","head");
    list.insert("2","1");
    list.insert("3","2");
    list.insert("4","1");
    console.log(list.toString());
}
a();