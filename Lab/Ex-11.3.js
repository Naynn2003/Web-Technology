function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(5))  > true

function findFirstNPrimes(n) {
  const primes = [];
  let num = 2;
  
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  
  return primes;
}

const primeNumbers = findFirstNPrimes(10);
console.log(primeNumbers);