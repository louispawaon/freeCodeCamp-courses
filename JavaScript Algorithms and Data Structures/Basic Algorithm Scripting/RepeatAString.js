function repeatStringNumTimes(str, num) {
    var newStr = "";
  
    while (num > 0) {
      newStr += str;
      num--;
    }
  
    return newStr;
  }