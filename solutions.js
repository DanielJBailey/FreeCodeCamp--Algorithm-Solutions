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
