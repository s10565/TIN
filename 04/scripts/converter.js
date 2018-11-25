function convert(degree) {
    if (degree == "c") {
        document.getElementById("far").value = document.getElementById("cel").value * 9 / 5 + 32;
    } else {
        document.getElementById("cel").value = (document.getElementById("far").value -32) * 5 / 9;
    }
}