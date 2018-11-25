function amountTocoins(n, tab){
	tab.sort(sortNumberDec);
	var out = [];
	for(var i=0;i<tab.length;i++){
		if(n>=tab[i]){
			n = n-tab[i];
			out.push(tab[i]);
			i--;
		}
	}
	return out;
}

function sortNumberDec(x,y) {
    return y - x;
}