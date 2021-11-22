function palindrome(str) {
    str=str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    var reversed = str.split("").reverse().join("");
    if (str === reversed) {
      return true;
    } else {
      return false;    
    } 
  }
  
  palindrome("RaceCar");