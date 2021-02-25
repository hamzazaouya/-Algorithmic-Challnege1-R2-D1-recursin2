/*global console*/

let myArr = [1, 1, 2, 3, 50, 200, 1340, 3023];
let size = myArr.length - 1;
console.log("The Array's Sum is: " + sumArr(myArr, size));

function sumArr(arr, n) {

  if (n === 0) {
    return arr[0];
  } else {
    return arr[n] + sumArr(arr, n - 1);
  }
}

//Fibonacci Series

function fibo(n) {
    if(n === 0) {
        return 0;
    }else if (n === 1) {
      return 1;
    }else {
      return fibo(n - 1 ) + fibo(n - 2)
    }
}

console.log("The Fibonacci is: " + fibo(3));

//The Power Using Recursion

function power(x, y) {
    if(y === 0) {
      return 1;
    }else {
      return x * power(x, y - 1);
    }
}

console.log("The Power is:  " + power(2, 2));
