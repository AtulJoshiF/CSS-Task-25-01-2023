const displayAndAlert = () => {
    let valueOfInput = document.getElementById("InputByUser").value;
    document.getElementById("display").innerHTML = valueOfInput;
    window.alert(valueOfInput);
  }