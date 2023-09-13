class Set{
    constructor(){
        this.items = {};
    }

    has(value){
        return this.items.hasOwnProperty(value);
    }

    add(value){
        if(!this.has(value)){
            this.items[value] = value;   // key - value 쌍을 동일하게 저장해야 값을 찾기 편함
            return true;
        }
        return false;
    }

    remove(value){
        if(this.has(value)){
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear(){
        this.items ={};
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.keys(this.items);
    }
}

const set = new Set();
set.add("일번");
set.add("이번");
set.add("삼번");
console.log(set.size());
set.remove("삼번");
console.log(set.size());