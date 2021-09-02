function sumPrimes(num) {
    let primes=[];
    for(let x=2;x<=num;x++){
      if(primes.every((prime)=>x%prime!==0)){
        primes.push(x);
      }
    }
    return primes.reduce((total,prime)=>total+prime,0);
  }
  
  sumPrimes(10);