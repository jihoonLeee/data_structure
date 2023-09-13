// 인접행렬
// 서로다른 정점들이 인접한 상태인지를 2차원 배열로 나타냄
// 두 정점 사이의 관계 유무 확인에 용이, 가장 빠른경로를 찾을때 주로 사용
// 두 정점이 연결되어져 있으면 1(true),아니면 0(false)
class Graph_Matrix{
 constructor(){
    this.matrix = [];
 }

 //vertex(정점,꼭지점)추가
 addVertex(){
    const currentLength = this.matrix.length;
    // 최초 연결 안된 정점들 (0) 추가
    for (let i = 0; i < currentLength; i++) {
       this.matrix[i].push(0);
    }

    // 0을 요소로 가지는 currentLength+1 길이의 배열을 matrix에 push해줌  -->이러면2차원 배열로 됨
    this.matrix.push(new Array(currentLength+1).fill(0));
 }

 // vertex탐색
 contains(vertex){
    return !!this.matrix[vertex];
 }

 // vertex - vertex 이어주는 edge 추가
 addEdge(from,to){
    this.#metricsCheck(from,to);
    // 1로 바꿔서 연결 표시
    this.matrix[from][to]=1;
    //this.matrix[to][from]=1;  무방향(양방향) 이면 필요함
 }
 hasEdge(from,to){
    return !!this.matrix[from][to];
 }

 removeEdge(from,to){
    const currentLength = this.matrix.length -1;
    this.#metricsCheck(from,to);
    this.matrix[from][to]=0;
     //this.matrix[to][from]=0;  무방향(양방향) 이면 필요함
 }
 #metricsCheck(from,to){
    const currentLength = this.matrix.length -1 ;
    if(from === undefined || to === undefined){
        console.log("2개의 인자가 필요합니다");
        return;
    }
    if(from > currentLength || to > currentLength || from < 0 || to < 0 ){
        console.log("매트릭스 범위를 벗어남");
        return;
    }
 }
}
const graph = new Graph_Matrix();
graph.addVertex();
graph.addVertex();
graph.addVertex();
graph.addEdge(0,1);
graph.addEdge(1,2);
console.log(graph.hasEdge(1,0));
console.log(graph.matrix);

// 장점
// 2차원 배열에 모든 정점의 간선 정보가 담겨있기 때문에 두 정점에 대한 연결을 조회할 때는 O(1) 의 시간복잡도를 가짐
// 인접 리스트에 비해 구현이 쉬움

// 단점
// 모든 정점에 대해 간선 정보를 입력해야 하므로 인접 행렬을 생성할 때는 O(n^2)의 시간 복잡도를 가짐
// 항상 2차원 배열이 필요하므로 필요이상의 공간 낭비


// 간선의 개수와 상관없이 모든 정점을 표현해야 하기 때문에 정점의 개수가 많을수록 메모리 사용량이 늘어남.
// 무방향,방향성그래프문제를 풀 때 정점의 개수가 1만개 이하라면 인접 행렬로 푸는게 나음!

