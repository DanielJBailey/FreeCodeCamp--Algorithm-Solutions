/// Intermediate Algorithm Solutions

/// 1. Sum All Numbers in a Range
function sumAll(arr) {
  arr = arr.sort(function(a,b) {return a - b;});
  let sumOuter = arr[0] + arr[arr.length -1];
  let innerArray = [];
  for(var i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    innerArray.push(i);
  }
  let sumInner = 0;
  for(var i = 0; i < innerArray.length; i ++) {
    sumInner += innerArray[i];
  }
  return sumInner + sumOuter;
}

