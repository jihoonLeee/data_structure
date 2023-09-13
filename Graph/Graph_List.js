// 트리와 그래프의 차이
// 1. 그래프는 루트노드가 존재하지 않음
// 2. 방향 또는 무방향 그래프가 모두 존재
const {Queue} = require('../Queue/Queue');
class Graph{
    constructor(){
        this.nodes ={};
    }

    addNode(node){
        this.nodes[node] = this.nodes[node] || [];
    }
    
    getAll(){
        return this.nodes;
    }

    contains(node){
        let result = null;
        this.nodes[node] ? (result = true) : (result = false);
        return result;
    }

    removeNode(node){
        this.nodes[node] ? delete this.nodes[node] : this.nodes[node];
    }

    hasEdge(fromNode, toNode){
        let result = null;
        this.nodes[fromNode] && this.nodes[toNode] && this.nodes[fromNode].includes(toNode)&& this.nodes[toNode].includes(fromNode)
        ? (result = true) : (result = false);
        return result;
    }

    addEdge(fromNode,toNode){
        this.nodes[fromNode].push(toNode);
        this.nodes[toNode].push(fromNode);
    }

    removeEdge(fromNode,toNode){
        let node = this.nodes[fromNode];
        if(this.nodes[fromNode].includes(toNode) &&
        this.nodes[toNode].includes(fromNode)){
            this.nodes[fromNode][node.indexOf(toNode)] = "";
            this.nodes[toNode][node.indexOf(fromNode)] = "";
        }
    }


    //인접리스트
    print() {
        let keys = Object.keys(this.nodes);
        for (let i = 0; i < keys.length; i++) {
            let value = this.nodes[keys[i]];
            let result = "";
            for (let j of value) result += j + " ";
            console.log(keys[i] + " -> " + result);
        }
    }

     // Depth-First Search 깊이우선탐색
     dfs(startingNode) {

        let visited = {}; // 방문 기록

        const search = (node, visited) => {
            visited[node] = true;

            // 인접 vertex 가져오기
            let getNeighbours = this.nodes[node];

            for (let i in getNeighbours) {
                let getNode = getNeighbours[i];
                // 깊이 탐색
                if (!visited[getNode]) search(getNode, visited);
            }
        }

        search(startingNode, visited);
        console.log('DFS = ', Object.keys(visited).join(" => "));
    }

    // Breath-First Search 너비우선탐색
    bfs(startingNode) {

        let visited = {};
        let result = []; // 순서 기록

        let q = new Queue();

        visited[startingNode] = true;
        q.insert(startingNode);

        while (!q.isEmpty()) {
            let getQueueElement = q.peekFront();
            result.push(getQueueElement);

            let getNodes = this.nodes[getQueueElement];

            for (let i in getNodes) {
                let neigh = getNodes[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.insert(neigh);
                }
            }
        }

        console.log("BFS =  ", result.join(" -> "));
        // A B D E C F
    }
}

const graph = new Graph();

graph.addNode("1");
graph.addNode("2");
graph.addNode("13");
graph.addNode("4");
graph.addEdge("1","2");
graph.addEdge("1","13");
graph.addEdge("2","4");
graph.print();


    //         1
    //     2       13
    // 4

    //DFS 깊이 우선 탐색 : 한 노드를 시작으로 인접한 다른 노드들을 재귀적으로 탐색해가고
    // 끝까지 탐색하면 다시 위로 올라와 다음을 탐색

    //BFS 너비 우선 탐색 : 하나로 시작 정점을 방문한 후 시작 정점에 인접한 모든 정점들을 우선 방문하는 방법



    // 인접리스트
    // 노드와 간선의 정보를 리스트 형태로 표현하는 방법.
    // 연결된 간선만 표시하기 때문에 인접 행렬보다 비교적 간단하다.
    // 정점의 순서는 꼭 오름차순이 아니어도 상관 없음
    // 인접 리스트로 문제를 풀 때는 정점의 개수만큼 반복문을 돌리는 것이 아니라 간선의 개수만큼 반복문을 돌려야 실행 속도를 높일 수 있음
    
    // 인접리스트에 있는 정점은 필수로 한 번씩 들러야 하는 정점이므로 