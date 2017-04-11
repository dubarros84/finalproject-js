
let newNotes = [];
let notesList = [];
let key = localStorage;


function addStorage() {
	key.setItem('textarea', JSON.stringify(newNotes));

	if (newNotes === null) {

  	let newNotes = new Array();
}

function getStorage() {
	newNotes = JSON.parse(key.getItem('textarea'));

	Number(index = li.getAttribute('textarea'))

	

}

function newNote(title, textarea) {
	let name = document.getElementById('title').value;
	let text = document.getElementById('textarea').value;


	let newNote = [name,text];
	notes.push(newNote);


  	obj = {
    title,
    text

  }

  return obj

}

function openNote() {
	

for (let i=0; i < newNotes.length-1; i++) {
if (textContent.value == newNotes[i][0]){

			document.getElementById('title').value = newNotes[i][0];
			document.getElementById('textarea').value = newNotes[i][1];
		}
}
	
}

function deleteNote() {
	
	let thisNote = document.getElementById('textarea').value;

	for (let i=0; i < notes.length; i++) {


		if (thisNote == newNotes[i][0]){
			newNotes.splice(i, 1);
		}
		}
	}

}

function saveNote() {
	let thisNote = document.getElementById('textarea').value;
	for (let i=0; i < newNotes.length; i++) {
		if (thisNote == newNotes[i][0]){
			newNotes[i][1] = document.getElementById('textarea').value;

		}
	}
}



let textContent = document.createElement('textarea'); 
textContent.addEventListener('click', (e) => {
	newNote();
	addStorage();
})

let saveItem = document.getElementById('save');
saveItem.addEventListener('click', (e) =>{
	saveNote();
	addStorage();
})

let deleteItem = document.getElementById('delete');
deleteItem.addEventListener('click', (e) =>{
	deleteNote();
	addStorage();
})



