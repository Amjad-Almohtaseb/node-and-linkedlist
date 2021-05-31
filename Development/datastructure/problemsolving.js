/*Fibonacci Checker
Have the function FibonacciChecker(num) return the string yes if the number given 
is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2,
 which means to find Fn you add the previous two numbers up. 
 The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. 
 If num is not in the Fibonacci sequence, return the string no.

Examples:
Input: 34
Output: yes

Input: 54
Output: no 
*/

/*n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
is a perferct square*/

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s === x;
}

function isFibonacci(n) {
  if (isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4))
    return "yes";

  return "no";
}
console.log(isFibonacci(89));
console.log(isFibonacci(144));
console.log(isFibonacci(233));
console.log(isFibonacci(377));
console.log(isFibonacci(34));
console.log(isFibonacci(54));
