var friendList = document.querySelectorAll(".friend-list");
var vowels = ['a','e','i','o','u'];

const setBackground = (id) => {
  let currentElement =  document.getElementById(id).textContent.charAt(0);
  for(let i=0; i<vowels.length; i++){
    if(currentElement.toLowerCase() == vowels[i]){
      return document.querySelector('body').style.background = "green";
    }
  };
  return document.querySelector('body').style.background = "red";
};