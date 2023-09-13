class QuickSort{
    
    quickSort(arr){
        this._quickSort(arr,0,arr.length - 1);
    }
    //자바스크립트에선 오버로딩이 없어서 이름을 다르게하거나 argument갯수를 측정할 수 있기 때문에 이를 이용
    _quickSort(arr,start,end){
        if(start >= end) {
            return;
        }
        var part2=this.partition(arr,start,end); // 오른쪽 방 첫번째 값
        if(start < part2 -1){
            this._quickSort(arr,start,part2-1);
        }
        if(part2 < end){
            this._quickSort(arr,part2,end);
        }
    }
    partition(arr,start,end){
        var pivot = arr[Math.floor((start+end)/2)];
        while(start<= end){
            while(arr[start] < pivot) start++;
            while(arr[end] > pivot) end--;
            console.log("start : ",start, "   end  : ", end ,"   ", arr ,"  pivot : ",pivot);
            if(start <= end){
                this.swap(arr,start,end);
                start++;
                end--;
            }
        }
        return start;
    }
    swap(arr,start,end){
        var tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
    }
}

let sort = new QuickSort();
var arr = [3,9,4,7,5,0,1,6,8,2];
console.log("Before Sorting: ",arr); 
sort.quickSort(arr); 