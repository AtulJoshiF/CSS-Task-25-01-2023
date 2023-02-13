var alertMessage = "";
const textContentInAlert = (id) => {
  let temporary = document.getElementById(id).textContent ;
  alertMessage += temporary;
  return window.alert(alertMessage);
}