function showPopup(hasFilter) {
	const popup = document.querySelector('#search_popup');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide');
}

function closePopup() {
	const popup = document.querySelector('#search_popup');
    popup.classList.add('hide');
}
