class HashMap{
    constructor(size= 100) {
        this.size = size;
        this.bucket = new Array(size).fill(null).map(() => []);
    }

    hash(key){
        const stringKey = typeof key === "object" ? JSON.stringify(key) : key;
        let hash = 0;
        for( let i = 0;i<stringKey.length; i++){
            hash += stringKey.charCodeAt(i);
        }
        return hash%this.size;
    }


    get(key) {
        const index = this.hash(key);
        const pairs = this.bucket[index];
        // key , value 한 쌍에서  key와 같은 것중 value를 return
        for (const pair of pairs) {
          if (pair[0] === key) {
            return pair[1];
          }
        }
    
        return undefined;
      }
    
    put(key, value) {
        const index = this.hash(key);
        const pairs = this.bucket[index];
        console.log(index,"?");
        if (pairs.length > 0) { 
            for (const pair of pairs) {
                if (pair[0] === key) {
                    pair[1] = value;
                    return;
                }
            }
        }
    
        pairs.push([key, value]);
    }
}

function test(){
    let hmap=new HashMap();
    hmap.put("a","ss");
    hmap.put("a","ss2zz");
    hmap.put(user,"sszz");
    console.log(hmap.get("a"));
    
}

var user = {
    a : "a",
    b : "b",
}


test();