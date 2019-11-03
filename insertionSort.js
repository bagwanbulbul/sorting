function insertionSort(num){
  for (var i = 1; i<num.length; i++){
    var key = num[i];
    for (var j = i-1; j>=0 && key<num[j]; j--){
      num[j+1]=num[j];
      }
    num[j+1]=key
    }
    return num;
    
  }
var arr = [2,4,1,0,5]
var sortedArr=insertionSort(arr)
console.log(sortedArr)