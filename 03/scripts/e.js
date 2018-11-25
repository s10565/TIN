function longestWord(input) {
  var inputSplit = input.split(' ');
  var longestWordArray = inputSplit.sort(function(a, b) { 
    return b.length - a.length;
  });

  return longestWordArray[0];
}