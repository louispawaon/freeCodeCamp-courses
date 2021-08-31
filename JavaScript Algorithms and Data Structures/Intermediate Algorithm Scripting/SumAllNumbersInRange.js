function sumAll(arr) {
    let total=0
    for (let x=Math.min(...arr);x<=Math.max(...arr);x++){
      total+=x
    }
    return total;
  }
  
  sumAll([1, 4]);