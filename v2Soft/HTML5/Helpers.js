function $(element) {
	return document.getElementById(element)
}

function $clickHandler(element, func){
	let e = $(element)
	e.addEventListener("click", func)
}