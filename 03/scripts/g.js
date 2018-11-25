function type_of_arg(n){
	if (typeof n === "string"){
    return "Variable is a string type";
	}
	if (typeof n === "number"){
    return "Variable is a number type";
	}
	if (typeof n === "boolean"){
    return "Variable is a boolean type";
	}
	if (typeof n === "undefined"){
    return "Variable is a undefined type";
	}
	if (typeof n === "object"){
    return "Variable is a object type";
	}
	if (typeof n === "function"){
    return "Variable is a function type";
	}
}