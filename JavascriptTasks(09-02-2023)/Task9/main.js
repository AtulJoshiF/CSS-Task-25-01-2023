// the whole document page has been given a event listener for keypress in keyboard
document.addEventListener('keypress', (e) =>{
    // The pressed key is made to be displayed in the p tag
      document.querySelector('p').textContent=`${String.fromCharCode(e.charCode)}`;
  } )