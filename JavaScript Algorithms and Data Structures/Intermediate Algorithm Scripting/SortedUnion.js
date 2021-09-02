function uniteUnique(arr) {
    var args=[...arguments]
    var final=[]
    for(let x=0;x<args.length;x++){
      for(let y=0; y<args[x].length;y++){
        if(!final.includes(args[x][y])){
          final.push(args[x][y])
        }
      }
    }
    console.log(final)
    return final;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);