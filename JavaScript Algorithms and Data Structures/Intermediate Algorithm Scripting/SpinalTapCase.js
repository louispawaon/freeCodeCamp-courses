function spinalCase(str) {

    return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
  }
  
  spinalCase('AllThe-small Things');