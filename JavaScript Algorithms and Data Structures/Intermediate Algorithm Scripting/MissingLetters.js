function fearNotLetter(str) {
    for(let x=0;x<str.length-1;x++){
      if(str.charCodeAt(x+1)-str.charCodeAt(x)!=1){
        return String.fromCharCode(str.charCodeAt(x) + 1);
      }
    }
  }
  
  fearNotLetter("abce");