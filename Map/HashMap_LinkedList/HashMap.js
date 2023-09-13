//https://github.com/SINHOLEE/examples_for_blog/tree/main/HashMapImp

const { LinkedList } = require("./LinkedList");

class LinkedHashMap{
    constructor(size= 100) {
        this.size = size;
        this.bucket = new Array(size).fill(null);
    }

    hash(key){
        let hash = 0;
        for( let i = 0;i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    values(){
        return this.#flatten().map(obj=>obj.value);
    }

    forEach(callback){
        this.entries().forEach(callback);
    }
    entries(){
        return this.#flatten().map(obj => [obj.key,obj.value]);
    }

    keys(){
        return this.#flatten().map(obj => obj.key);
    }

    set(key,value){
        const index = this.getIdxByKey(key);
        if(!this.bucket[index]){
            this.bucket[index] = new LinkedList();
        }
        const linkedList = this.bucket[index];
        
        linkedList.append(key,value);
        // console.log(index,linkedList.getAll() , " linked");
    }
    getIdxByKey(key){
        return this.hash(key)%this.size;
    }

    size(){
        return this.bucket.filter(item => !!item).reduce((total,linkedList) => total + linkedList.size(),0);
    }
    get(key) {
        const linkedList = this.#getLinkedListByKey(key);
        if (!linkedList) return null;
        const node = linkedList.get(key);
        if (!node) return null;
        return node;
    }

   
   #flatten(){
    return this.bucket.filter(item => item).reduce((arr,linkedList) => arr.concat(linkedList.getAll()),[]);
   }
   #getLinkedListByKey(key){
    const idx = this.getIdxByKey(key);
    const node = this.bucket[idx];
    console.log(this.bucket.length," : bucket");
    console.log(idx," : idx");
    return node;
   }
}

function test(){
    let hmap=new LinkedHashMap();
    hmap.set("1","ss");
    hmap.set("2","sszz");
    hmap.set("2","z");
    hmap.set("3","1zzz2");
    hmap.set("2","123");
    console.log(hmap.get("3"));

}


var user = {
    a : "a",
    b : "b",
}
var user2 = {
    a : "a",
    b : "b",
    c : "c"
}
test();