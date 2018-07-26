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

/// 2. Diff Two Arrays
function diffArray(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i ++) {
      if(!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
    for(var i = 0; i < arr2.length; i ++) {
      if(!arr1.includes(arr2[i])) {
        newArr.push(arr2[i]);
      }
    }
    return newArr;
}

/// 3. Seek and Destroy
function destroyer(arr) {
    for(var i = 1; i < arguments.length -1; i ++) {
        arr = arr.filter(x => x !== arguments[i]);
    }
    return arr;
}




