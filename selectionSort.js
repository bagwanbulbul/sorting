function selectionSort(array){
  var i=0
  while (i<array.length){
    var min = i
    var j=i+1
    while (j<array.length){
        if (array[j] < array[min]){
            min = j
        }
        j++
    }
    var swap=array[i]
    array[i]=array[min]
    array[min]=swap
    i++
  }
  return array
  }
var data = [-2, 45, 11, -9,0,6]
console.log(selectionSort(data))