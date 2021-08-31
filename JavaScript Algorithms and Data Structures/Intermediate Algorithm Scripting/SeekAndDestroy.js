function destroyer(arr,...removeElements) {
    return arr.filter(element=>!removeElements.includes(element));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);