function getIndexToIns(arr, num) {
    arr.sort((x, y) => x - y);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
  }