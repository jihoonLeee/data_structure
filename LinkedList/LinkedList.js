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
        this.element = element;  // 데이터
        this.next = null;  // 다음 주소를 가짐
    }
    getValue() {
        return this.element;
    }
}

class LinkedList{
  constructor(){
    this.head = new Node("head");
  }

  append(newElement){
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.head; // 시작노드
    while(current.next !=null){ //맨 끝 노드 찾기6
        current = current.next;
    }
    current.next = newNode;
  }

  insert(newElement,item){
    let newNode= new Node(newElement);//새로운 노드 생성
    let current = this.find(item); // 삽입할 위치의 노드 찾기
    newNode.next = current.next;  // 찾은 노드가 가리키는 노드를 새로운 노드가 가르키게
    current.next = newNode;   // 찾은 노드는 새로운 노드를 가리키게
  }

  delete(item){
    let preNode = this.findPrevious(item);// 삭제할 노드를 가리키는 노드 찾기 = 삭제할 노드의 이전 노드
    preNode.next = preNode.next.next; //삭제할 노드의 다음노드를 가리키도록!
  }

  find(item){
    let currentNode = this.head;
    console.log(currentNode.element , "  :: ", item);
    while(currentNode.element!==item){
        currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPrevious(item){
    let currentNode = this.head;
    while(currentNode.next != null && currentNode.next.element !== item){
        currentNode= currentNode.next;
    }
    return currentNode;
  }
  /**
     * key를 기준으로 찾고 없으면 null을 반환
     * */
  search(key) {
    let current = this.head

    while (current) {
        if (current.hasKey(key)) {
            return current
        }
        current = current.next()
    }
    return null
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
    let list = new LinkedList();
    list.append("aa");
    list.insert("ab","aa");
    list.insert("bb","aa");
    list.delete("bb");
    list.append("굿");
   console.log(Object.getOwnPropertyDescriptors({"a":"a"}));
}
a();

module.exports = {
    LinkedList
}