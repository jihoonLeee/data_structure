class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = (node) =>{
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else {
                        return searchTree(node.left);
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
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


    find(data){
        let current = this.root;
        let count = 0 ;
        while(current.data !== data){
            // 탐색 데이터가 작을 경우 왼쪽부터 탐색
            if(data < current.data){
                current = current.left;
            }else{
                current= current.right;
            }
            count++;
            // 존재하지 않으면 null
            if(current ===null) return null;
        }
        console.log("탐색 횟수 : ",count);
        return current;
    }


    // 전위순회   N -> L -> R
    preOrderTraversal (root){ 
        if(!root){
            return;
        }
         // 1번 방법
        console.log(root.data);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right);

         // 2번 방법
        let result = [];
        const traversePreOrder = (node) => {
            // 방문 하는 대로 나 자신 push
            result.push(node.data);
            // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.left && traversePreOrder(node.left);
            // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.right && traversePreOrder(node.right);
        };
        traversePreOrder(root);
        return result;
    }

    // 중위순회  L -> N -> R
    inOrderTraversal(root){
        if(!root){
            return;
        }
         // 1번 방법
        this.inOrderTraversal(root.left);
        console.log(root.data);
        this.inOrderTraversal(root.right);

         // 2번 방법
        let result = [];
        const traverseInOrder = (node) => {
            // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.left && traverseInOrder(node.left);
            // 현재 노드 push
            result.push(node.data);
            // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }
    
    // 후위순회  L-> R -> N
    postOrderTraversal(root){
        if(!root){
            return;
        }

         // 1번 방법
        this.postOrderTraversal(root.left);
        this.postOrderTraversal(root.right);
        console.log(root.data);


        // 2번 방법
        let result = [];
        const traversePostOrder = (node) => {
            // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.left && traversePostOrder(node.left);
            // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
            node.right && traversePostOrder(node.right);
            // 마지막으로 나 자신 push
            result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
    }

    // 단계순회 낮은 Level 부터 순차적으로 순회
    levelOrderTraversal(root) {
        let result = [];
        let temp = [];
        if (!root) return null;
        else {
            temp.push(this.root);
            while (temp.length > 0) {
                const node = temp.shift(); // 첫 번째 요소 제거 후 반환
                result.push(node.data); // 루트 값 작성
                // 왼쪽 노드가 있는 경우
                if (node.left != null) temp.push(node.left);
                // 오른쪽 노드가 있는 경우
                if (node.right != null) temp.push(node.right);
            };
            return result;
        }
    };
}

const tree = new Tree();

tree.add(5);
tree.add(6);
tree.add(7);
tree.add(3);
tree.add(2);
tree.add(1);
tree.add(9);
tree.add(4);
// tree.remove(7);
console.log(tree.find(9));
// console.log(tree.preOrderTraversal(tree.root));

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