//  Prime (factors are only one and itself)
// Composite

showPrimes(20);

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    // 2 - current (i)

    let isPrime = true;
    for (let factor = 2; factor < num; factor++)
      if (num % factor === 0) {
        isPrime = false;
        break;
      }
      if (isPrime) console.log(num)
  }
}
