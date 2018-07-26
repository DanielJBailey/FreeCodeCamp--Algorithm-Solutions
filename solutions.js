/// BASIC ALGORITHM SCRIPTING

/// 1.  Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}

/// 2. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

/// 3. Factorialize a Number
function factorialize(num) {
    if(num === 0) {return 1};
    return num * factorialize(num-1);
}

/// 4. Find the Longest Word in a String
function findLongestWordLength(str) {
    str = str.split(' ').sort(function(a,b) {return b.length - a.length;});
    return str[0].length; 
}

/// 5. Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
      arr[i].sort(function(a,b){return b - a});
      newArray.push(arr[i][0]);
    }
    return newArray; 
}

/// 6. Confirm the Ending
function confirmEnding(str, target) {
    str = str.toLowerCase();
    str = str.replace(/\s/g, "");
    if(str.substr(-target.length) === target) {
        return true
    } else {
        return false;
    }
}

/// 7. Truncate String
function repeatString(str, num) {
    let str_length = str.length;
    if(str_length > num) {
        str = str.substring(0, num) + '...';
        return str;
    } else {
        return str;
    }
}

//8. Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
      if(func(arr[i])) {
        num = arr[i];
        break; 
      } else if (!func(arr[i])){
        num = undefined;
      }
    }
    return num;
}
