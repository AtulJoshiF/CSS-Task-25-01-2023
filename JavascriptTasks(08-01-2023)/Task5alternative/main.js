var familyMembers = document.querySelectorAll(".family-members");
console.log(familyMembers);

const oddOrEvenElement = (id) => {
  let currentElement = document.getElementById(id);
  for(let i=0; i<familyMembers.length; i++){
    if(currentElement == familyMembers[i] && (i+1)%2 !=0){
      if(currentElement.style.color == "red"){
        return currentElement.style.color = "green";
      }else{
        return currentElement.style.color = "red";
      }
    }
  };
};