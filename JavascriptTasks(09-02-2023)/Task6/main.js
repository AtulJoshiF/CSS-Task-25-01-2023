let colors = ['red','blue','green','yellow','pink','brown','lavender','megenda','lightblue','black'];

let body = document.querySelector('body');

let count = [0,0,0,0,0,0,0,0,0,0];

Math.floor(Math.random() * 10);

const setBackground = () =>{
  let random = Math.floor(Math.random() * 10);
  body.style.background = colors[random];
  count[random]++;
  for(let i=0; i< count.length; i++){ 
    let element = document.getElementById(`count${i+1}`);
    element.innerText = `${count[i]}`;
  };
  return console.log(count);
}
