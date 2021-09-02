function sumFibs(num) {
    var first=0
    var second=1
    var final=0
    for (let x=0;x<=num;x++){
      let nextItem=first+second
      first=second
      second=nextItem
      if(nextItem%2!=0&&nextItem<=num){
        final+=nextItem
      }
    }
    return final+1;
  }
  
  sumFibs(1000);