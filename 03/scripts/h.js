function getSecondsNumbers(n){
	var out = [0,0];
	n.sort(sortNumber);
	out[0] = n[1];
	out[1] = n[n.length-2];
	return out;
}

function sortNumber(x,y) {
    return x - y;
}