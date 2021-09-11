function steamrollArray(arr) {
    let flatten = [].concat(...arr);
    return flatten.some(Array.isArray) ? steamrollArray(flatten) : flatten;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);