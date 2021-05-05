document.querySelector("#sort-asc").onclick = mySort;
document.querySelector("#sort-desc").onclick = mySortDesc;
document.querySelector("#sort-asc1").onclick = mySort1;
document.querySelector("#sort-desc1").onclick = mySortDesc1;
function mySort(){
	let cards = document.querySelector("#cards");
	for (let i = 0; i < cards.children.length; i++){
		for (let j = i; j < cards.children.length; j++){
			if (+cards.children[i].getAttribute("data-prise") > +cards.children[j].getAttribute("data-prise")){
				replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
				insertAfter(replacedNode, cards.children[i]);
			}

		}
	}
}

function mySortDesc(){
	let cards = document.querySelector("#cards");
	for (let i = 0; i < cards.children.length; i++){
		for (let j = i; j < cards.children.length; j++){
			if (+cards.children[i].getAttribute("data-prise") < +cards.children[j].getAttribute("data-prise")){
				replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
				insertAfter(replacedNode, cards.children[i]);
			}

		}
	}
}

function mySort1(){
	let cards = document.querySelector("#cards");
	for (let i = 0; i < cards.children.length; i++){
		for (let j = i; j < cards.children.length; j++){
			if (+cards.children[i].getAttribute("data-year") > +cards.children[j].getAttribute("data-year")){
				replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
				insertAfter(replacedNode, cards.children[i]);
			}

		}
	}
}

function mySortDesc1(){
	let cards = document.querySelector("#cards");
	for (let i = 0; i < cards.children.length; i++){
		for (let j = i; j < cards.children.length; j++){
			if (+cards.children[i].getAttribute("data-year") < +cards.children[j].getAttribute("data-year")){
				replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
				insertAfter(replacedNode, cards.children[i]);
			}

		}
	}
}

function insertAfter(elem, refElem){
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

