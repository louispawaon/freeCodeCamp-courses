function pairElement(str) {
    var pairing={
      A:"T",
      T:"A",
      C:"G",
      G:"C"
    };
    var arr = str.split("")
    return arr.map(x=>[x,pairing[x]]);
  }
  
  pairElement("GCG");