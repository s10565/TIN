function binarySearch(tab, n) {
    var left = 0;
    var right = tab.length - 1;
	var mid
	tab.sort(sortNumber);
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (tab[mid] === n) {
            return mid;
        }
        if (tab[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function sortNumber(x,y) {
    return x - y;
}