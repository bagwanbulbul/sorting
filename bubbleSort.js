function bubbleSort(num){
  for (var i = 0; i<num.length; i++){
    for (var j = 0; j<num.length-1-i; j++){
      if (num[j]>num[j+1]){
        var temp=num[j+1]
        num[j+1]=num[j]
        num[j]=temp
        }
      }
    
    
    }
    return num;
    
  }
var arr = [2,4,1,0,5]
var sortedArr=bubbleSort(arr)
console.log(sortedArr)