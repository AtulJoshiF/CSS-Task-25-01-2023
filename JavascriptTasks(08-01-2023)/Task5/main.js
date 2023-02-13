var familyMembers = document.querySelectorAll(".family-members");


const oddOrEvenElement = (id) => {
  let currentElement = document.getElementById(id);
  for(let i=0; i<familyMembers.length; i++){
    if(currentElement == familyMembers[i] && (i+1)%2 !=0){
      return currentElement.style.color = "red";
    }
  };
  return currentElement.style.color = "green";
};