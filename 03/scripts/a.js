function silnia_iter(n){
   if ((n == 0) || (n == 1))
      return 1
   else {
	   var result = 1
	   for (var i=1; i<=n; i++){
			result = result * i 
	   }
	   return result
   }
}

var silnia_rek = function(n) {
	if ((n == 0) || (n == 1))
      return 1
   else {
      var result = (n * silnia_rek(n-1) );
      return result
   }};