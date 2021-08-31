function diffArray(arr1, arr2) {
    var newArr = (arr1.filter(x=>!arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x))));
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);