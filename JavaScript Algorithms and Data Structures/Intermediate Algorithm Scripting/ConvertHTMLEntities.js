function convertHTML(str) {
    var chars={
      '&':"&amp;",
      '<':"&lt;",
      '>':"&gt;",
      '"':"&quot;",
      "'":"&apos;"
    };
    return str.replace(/([&<>\"'])/g,x=>chars[x])
  }
  
  convertHTML("Dolce & Gabbana");