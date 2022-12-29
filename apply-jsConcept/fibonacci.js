/* const fibo = [0, 1];
for (i = 2; i <= 5; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
 */

function fibonacciSeries(num) {
  if (typeof num != "number") {
    return "Please give number";
  }
  if (num < 2) {
    return "Please give a number above 1";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

myfibo = fibonacciSeries(0);
console.log(myfibo);
