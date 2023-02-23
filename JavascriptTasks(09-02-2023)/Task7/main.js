var listOfDivisibles = [];

const displayDivisibles = () => {
  let rangeFrom = parseInt(document.getElementById("range-from").value);
  let rangeTo = parseInt(document.getElementById("range-to").value);
  let divisibleBy = parseInt(document.getElementById("divisible-by").value);
  for( let i = rangeFrom; i<= rangeTo; i++){
    if( i % divisibleBy == 0){
      listOfDivisibles.push(i);
    }
  }
  let result = document.getElementById('result-list');
  
  for(let k = 0; k < listOfDivisibles.length ; k++){
  result.textContent +=`${listOfDivisibles[k]} ` ;
  }
}


