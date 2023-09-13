class Node{
    constructor(key,value,left=null,right=null){
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class TreeMap{
    constructor(){
        this.root = null;
    }

    put(key,value){
        const node = this.root;
        if(node === null){
            this.root = new Node(key,value);
            return;
        }else{
            const searchTree = (node) =>{
                if(key < node.key){
                    if(node.left === null){
                        node.left = new Node(key,value);
                        return;
                    }else {
                        return searchTree(node.left);
                    }
                }else if(key > node.key){
                    if(node.right === null){
                        node.right = new Node(key,value);
                        return;
                    }else{
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    remove(data){
        const removeNode = (node,data) =>{
            if(node ==null){
                return null;
            }
            if(data === node.data){
                console.log(node , " : node  ", data , " :data");
                if(node.left==null && node.right===null){
                    // leaf 노드
                    return null;
                }
                if(node.left===null){
                    //left가 없는 경우 right가 해당 삭제 데이터에 들어감
                    return node.right;
                }
                if(node.right===null){
                    //right 없는 경우 left가 해당 삭제 데이터에 들어감
                    return node.left;
                }

                var tempNode = node.right;
                while(tempNode.left !==null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            }else if (data < node.data){
                node.left = removeNode(node.left,data);
                return node;
            }else{
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root = removeNode(this.root,data);
    }



    get(key){
    	let currentNode=this.root;

    	while(currentNode!=null){
    		if(currentNode.key===key)
    			return currentNode.value;

    		if(currentNode.key<key)
    			currentNode=currentNode.right;
    		else
    			currentNode=currentNode.left;

    	}

    	return null;//not found
    }
}

const tree = new TreeMap();

tree.put(5,"a");
tree.put(6,"b");
tree.put(7,"c");
tree.put(3,"d");
tree.put(2,"e");
tree.put(1,"f");
tree.put(9,"g");
tree.put(4,"h");
// tree.remove(7);
// console.log(tree.preOrderTraversal(tree.root));
console.log(tree.root);
// console.log(" -------------- ");
// tree.inOrderTraversal(tree.root);
// console.log(" -------------- ");
// tree.postOrderTraversal(tree.root);      
// console.log(" -------------- ");
// console.log(tree.levelOrderTraversal(tree.root));

    //            5
    //      3           6
    //  2      4              7
    //1                           9


    // 1. root노드의 left노드는 root노드의 데이터보다 작아야함    left node < root node < right node
    // 2. root노드의 right노드는 root노드의 데이터보다 커야함  
    // 3. 및 하위 child 노드들도 똑같이 적용
    // 4. 중복값 X

    // 이진트리의 장점
    // 1. 계층형 데이터를 저장할 때 용이함
    // 2. 동적인 size를 가짐
    // 3. 빠른 insert와 delete 작업
    // 4. 이진트리에 삽입된 노드는 즉시 정렬됨

    // 이진트리의 단점
    // 1. Node들의 재배열시 느림
    // 2. child node 는 상위 node 의 정보를 가지고있지 않음
    // 3. 이진트리는 hash table 보다 빠르지 않음
    // 4. 이진트리가 균형잡힌 하위트리를 가지고 있지 않으면 **선형 검색으로 전락할 수 있음

    // 폴더와 파일 처럼 계층형 데이터 저장시 용이
    // 데이터 검색 및 정렬시 적합


    //https://joonfluence.tistory.com/117
    //https://y00eunji.tistory.com/entry/JS%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%ED%8A%B8%EB%A6%ACTree
    //https://developerjun2.tistory.com/147