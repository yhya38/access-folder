function factorial(n) {
  let res = 1;
  if (n == 0 || n == 1) return n;
  else {
    for (let i = n; i >= 1; i--) {
      res *= i;
    }
  }

  return res;
}

console.log(factorial(5)); //Prints: 120
