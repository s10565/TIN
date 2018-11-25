function palindrome(input) {
  var re = /[^A-Za-z0-9]/g;
  
  var inputSimpleLow = input.toLowerCase().replace(re, '');
  var outputSimpleLow = inputSimpleLow.split('').reverse().join(''); 
   
  if(outputSimpleLow === inputSimpleLow){
	  return true;
  } else {
	  return false;
  }
}