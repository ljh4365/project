function $id(id){
	return document.getElementById(id);
}

function $get(target,tagName){
	if(typeof target == "string" && $(target)){
		return $(target).getElementsByTagName(tagName);
	}else if(typeof target == "object"){
		return target.getElementsByTagName(tagName);
	}
}

function $create(tagName){
	return document.createElement(tagName);
}
