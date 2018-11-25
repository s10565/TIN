
var ipAddress = "localhost";
var portNumber = "3000";
var httpModule = require("http");

var server = httpModule.createServer(function serviceRequest (request, response) {

  var urlString = new String(request.url);
  //console.log(urlString);
  var htmlResponse;
    
  if(urlString == '/' || urlString == '/favicon.ico'){
	  htmlResponse = "<html><head><title>URL Calculator</title><meta charset=utf-8></head><b> URL Calculator</b><p>Na pasku adres po ukośniku (/) dopisz działanie do wykonania w formnie:<br>działanie/liczba1/liczba2<br>Działania do wyboru:<br>add - dodawanie<br>sub - odejmowanie<br>mul - mnozenie<br>div - dzielenie<br>Przykład:<br>2+2 - /add/2/2</p></html>";
  }else{
	  var urlValues = urlString.split("/");
	//console.log(urlValues);
  
  var operation = new String(urlValues[1]);
  //console.log(operation);
  var firstNumber = new String(urlValues[2]);
  //console.log(firstNumber);
  var secondNumber = new String(urlValues[3]);
  //console.log(secondNumber);
  
  if(urlValidation(operation.toLowerCase(), firstNumber , secondNumber)){	  
	  var result = getResult(operation.toLowerCase(), Number(firstNumber) , Number(secondNumber));
	  htmlResponse = "<html><head><title>URL Calculator - wynik</title><meta charset=utf-8></head>" + operation + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</html>";
  }
  else{
	  htmlResponse = "<html><head><title>URL Calculator - wynik</title><meta charset=utf-8></head><b> Wprowadzono niepoprawne dane! </b></html>";
  }
  }

  response.end(htmlResponse);
 });

function urlValidation(oper, x, y){
	/*
	if(oper != "add"){
		return false
	}
	if(oper != "div"){
		return false
	}
	if(oper != "mul"){
		return false
	}
	if(oper != "sub"){
		return false
	}
	*/
	if(isNaN(x)){
		return false;
	}
	if (x == ''){
		return false;
	}
	if(isNaN(y)){
		return false;
	}
	if (y == ''){
		return false;
	}
	if(y == 0 && oper == "div"){
		return false;
	}

	return true;
}

function getResult(oper, x, y)
{
 var result;

 if(oper == "add")
  result = x + y;

 else if(oper == "sub")
  result = x - y;

 else if(oper == "mul")
  result = x * y;

 else if(oper == "div")
  result = x / y;

 return result;
}

server.listen(portNumber, ipAddress);
console.log("Server running at http://"+ipAddress+":"+portNumber+"/");