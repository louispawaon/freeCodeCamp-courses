function myReplace(str, before, after) {
    return str.replace(before,
    before.match(/^[a-z]/)?after.charAt(0).toLowerCase()+after.substring(1):after.charAt(0).toUpperCase()+after.substring(1))
  }
  
  myReplace("I think we should look up there", "up", "Down");