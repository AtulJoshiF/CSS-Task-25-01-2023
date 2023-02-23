const hider = (id) => {
    let boxHided = document.getElementById(id);
    boxHided.style.visibility = 'hidden';
    let boxes = document.querySelectorAll('.boxes');
    for(let i = 0; i < boxes.length; i++){
      if( boxes[i].style.visibility == 'hidden' && boxes[i] != boxHided)     {
        boxes[i].style.visibility = 'visible';
      }
    }
  }
  