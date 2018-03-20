
function telephoneCheck(str) {
  // Good luck!
  
  //RegExp for all valid numbers
//   var re =/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
  var re = /^(1\s?)?((\(\d{3}\))|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return re.test(str);
}



telephoneCheck("1 555-555-5555");

