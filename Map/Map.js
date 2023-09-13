class TestMap{
    constructor(){
        this.keys = new Array();
        this.values = new Array();
    }
 
   put(key,value){
    const index = this.keys.indexOf(key);
    if(index === -1){
        this.keys.push(key);
        this.values.push(value);
    }else{
        this.values[index]=value;
    }
   }

   get(key){
    const index = this.keys.indexOf(key);
    if(index===-1){
        return undefined;
    }else{
        return this.values[index];
    }
   }

   delete(key){
    const index = this.keys.indexOf(key);
    if(index===-1){
        return false;
    }else{
       this.keys.splice(index,1);   // 배열에서 인덱스가 index부터 1개의 데이터 삭제
       this.values.splice(index,1);
       return true;
    }
   }

   has(key){
    return this.keys.indexOf(key)!== -1;
   }

   size(){
    return this.keys.length;
   }

}

  function zz() {
    const tmap = new TestMap();
    tmap.put("지훈","지훈2");
    console.log(tmap.get("지훈"));
  }

  zz();