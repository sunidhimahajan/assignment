var list = document.querySelector('#movie-list ul');

 list.addEventListener('click', function(e){
 if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
     const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
    li.parentNode.removeChild(li);
     list.removeChild(li);
 };
 });
const addForm = document.forms['add-movie'];
var list = document.querySelector('#movie-list ul');
addForm.addEventListener('submit',function(e)
{
	e.preventDefault();
	const value = addForm.querySelector('input[type = "text"]').value;
	const li = document.createElement('li');
	const movieName = document.createElement('span');
	const deleteBtn = document.createElement('span');
	li.appendChild(movieName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
	deleteBtn.textContent = 'Delete';
	movieName.textContent = value;
	movieName.classList.add('name');
	deleteBtn.classList.add('delete');
});
var mlist = document.querySelector('ul');
function Hide(){
	if(mlist.style.display == "") {
		mlist.style.display = "none";
	}
	else {
		mlist.style.display = "";
	}
}
function search() {
	var input, filter, ul, a, i, txtValue;
	input = document.getElementsByTagName("input")[0];
	filter = input.value.toUpperCase();
	li = document.getElementsByTagName("li")
;	for(i = 0; li.length; i++)
	{
		a=li[i].getElementsByClassName("name")[0];
		txtValue = a.textContent || a.innerText;
		if(txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		}
		else {
			li[i].style.display = "none";	
		}
	}
}