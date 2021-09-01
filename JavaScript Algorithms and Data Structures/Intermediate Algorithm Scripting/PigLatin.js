function translatePigLatin(str) {
    var checker=/^[^aeiou]+/;
    let consonant = str.match(checker);
    return consonant !== null
    ?str
    .replace(checker,"")
    .concat(consonant)
    .concat("ay")
    :str.concat("way");
  }
  
  translatePigLatin("glove");