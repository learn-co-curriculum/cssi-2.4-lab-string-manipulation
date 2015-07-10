var encode = function(string){
  var newString = string.replace(/s/gi, '5');
  newString = newString.replace(/e/gi, '3');
  newString = newString.replace(/g/gi, '8');
  newString = newString.replace(/b/gi, '6');
  newString = newString.replace(/ /g, '$');
  newString = newString.split("").reverse().join("");
  return newString;
}
