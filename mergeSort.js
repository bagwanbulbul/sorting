function mergesort(arr){
    if(arr.length>1){
        var mid = arr.length/2;
        var left = arr.slice(0,mid);
        var right = arr.slice(mid,arr.length)

        mergesort(left)
        mergesort(right)
        var i = 0;
        var j = 0;
        var k = 0;

        while(i<left.length && j<right.length){
            if(left[i]<right[j]){
                arr[k]=left[i]
                i=i+1
            }
            else{
                arr[k]=right[j]
                j=j+1
            }
            k=k+1
        }
        while(i<left.length){
            arr[k]=left[j]
            i= i+1
            k = k+1
        }
        while(j<right.length){
            arr[k]=right[j]
            j = j+1
            k = k+1
        }
    }
    return arr;
}
var sorted = mergesort([1,3,2,4])
console.log(sorted)
