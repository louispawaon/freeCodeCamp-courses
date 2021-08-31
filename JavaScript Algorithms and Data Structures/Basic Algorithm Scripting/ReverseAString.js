function reverseString(str) {
    let arr=str.split("")
    let final=""
    for (let x=arr.length-1;x>=0;x--){
      final+=str[x]
    }
    return final;
  }
  
  reverseString("hello");