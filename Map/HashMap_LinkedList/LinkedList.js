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
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
    getValue() {
        return this.value;
    }
    hasNext(){
      return !!this.next;
    }
    next(){
      return this.next;
    }
    setNext(node){
      this.next=node;
    }
    hasKey(key){
      return this.key === key;
    }
    getKey(){
      return this.key;
    }
    toObj(){
      return {key:this.getKey(),value:this.getValue()};
    }
    isEqual(node){
      return node instanceof Node && node.getKey() == this.key;
    }
  }

class LinkedList{
  constructor(){
    this.head = new Node(null, null);
  }
  size(){
    return this.getAll().length;
  }
  getAll(){
    const res= [];
    let current = this.head;
    while(current){
      res.push(current.toObj());
      current=current.next;
    }
    return res;
  }
  get(key){
    let current = this.head;
    while(current){
      if(current.hasKey(key)){
        return current;
      }
      current = current.next;
    }
  }
  delete(key){
    if(!this.head) return;
    if(this.head.hasKey(key)){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while(current.hasNext()){
      const nextNode = current.next;
      if(nextNode.hasKey(key)){
        current.setNext(nextNode.next);
        return;
      }
      current = nextNode;
    }
  }
  append(key,value){
    let newNode = new Node(key,value); //새로운 노드 생성

    if(!this.head||this.head.isEqual(newNode)){
      this.head=newNode;
      return;
    }
   let current = this.head;
    while(current.hasNext() && !current.isEqual(newNode)){ //맨 끝 노드 찾기
        current = current.next;
    }
    current.setNext(newNode);
  }

}


// function a (){
//     let list = new LinkedList();
//     LinkedList.prototype
//     list.append("1","22");
//     list.append("aa","33");
//     console.log(list.getAll());
//     console.log(list.get("1"));
// }
// a();

module.exports = {
    LinkedList
}