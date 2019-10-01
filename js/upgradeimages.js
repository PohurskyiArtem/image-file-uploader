function upgradeimage(e){
	var index = e.target.parentElement.dataset.changeindex;
	if (index){
	var name = e.target.parentElement.parentElement.childNodes[1];
	var saveButton = document.createElement('button');

	e.target.parentElement.parentElement.appendChild(saveButton);
	saveButton.id = "saveButt";
	saveButton.innerHTML = `
		<i class="far fa-save"></i>
	`;

	name.setAttribute("contenteditable", "true");
	name.focus();

	saveButton.addEventListener('click', saveNameToLocStorage);

	}
}

function saveNameToLocStorage (e){
	var index = e.target.parentElement.parentElement.childNodes[1].dataset.saveindex;
	e.target.parentElement.parentElement.childNodes[1].setAttribute("contenteditable", "false");
	var newName = e.target.parentElement.parentElement.childNodes[1].textContent;
	e.target.remove();
	images[index].name = newName;
	localStorage.setItem('images', JSON.stringify(images));
}