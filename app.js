//crate a function that takes int and get odd or even 

function oddEven(num) {
    return num % 2 === 0 ? "even" : "odd"
}
console.log(oddEven(8));

// return the sum of the positive nums in the array

function calc(arr) {
    return arr.filter((x)=> x > 0).reduce((acc, cur)=> acc + cur)
}
console.log(calc([1,2,3,4,5,6,-7]));

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

function sumWithoutLarge(arr1) {
    let mainValue = arr1.sort((a,b) => a-b).slice(1,-1).reduce((acc , cur) => acc + cur)
    return mainValue
}
console.log(sumWithoutLarge([1,2,3,4,5,9,9]));

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n,s) {
    // let result="";
    // for (let i = 0; i < n; i++) {
    //     result += s
    // }
    // return result
    return s.repeat(n)
}

console.log(repeatStr(6,"farha"));

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return n.toString().split("").map((a)=> Number(n)).reverse()
}
console.log(digitize(3456789));