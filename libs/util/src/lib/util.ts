export const findPrimes = (target: number): number[] => {
  if (!target || !Number.isInteger(target) || target <= 2){
    throw Error('Please enter an integer greater than two.');
  }

  const record: number[] = [];
  const primes: number[] = [2];
  const max: number = Math.sqrt(target);

  for (let number = 0; number < target; number++) {
    record.push(1);
  }

  for (let prime = 3; prime <= max; prime += 2) {
    if (record[prime]) {
      for (
        let multiple = prime * prime;
        multiple < target;
        multiple += prime * 2
      ) {
        record[multiple] = 0;
      }
    }
  }

  for (let sievedNumber = 3; sievedNumber < target; sievedNumber += 2) {
    if (record[sievedNumber]) {
      primes.push(sievedNumber);
    }
  }

  return primes;
};

export const findArrayMedian = (arr: any[]): any[] => {
  if (!arr || !Array.isArray(arr)){
    throw Error('No input array given!');
  }

  if (arr.length === 0) {
    return [];
  }

  if (arr.length % 2 === 0) {
    return [arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2)]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};
