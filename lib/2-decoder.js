var decode = function(string){
  var newString = string.split("").reverse().join("");
  newString = newString.replace(/5/g, 's');
  newString = newString.replace(/3/g, 'e');
  newString = newString.replace(/8/g, 'g');
  newString = newString.replace(/6/g, 'b');
  newString = newString.replace(/\$/g, ' ');
  return newString;
}
