let btns = document.querySelectorAll("*[data-modal-btn]");

for(let i=0; i<btns.length; i++){
	btns[i].addEventListener('click', function(){
		let name = btns[i].getAttribute('data-modal-btn');
		let modal = document.querySelector("[data-modal-window='"+name+"']");
		modal.style.display = 'block';
	})
}