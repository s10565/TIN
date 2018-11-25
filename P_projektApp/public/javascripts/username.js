var un;
if(typeof req !== "undefined"){
	un = req.session.user.username;
} else {
	un = "visitor";
}	
document.getElementById("loggeuser").innerHTML = "test";