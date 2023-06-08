const button = document.querySelector(".btn");
const par = document.querySelector("#point");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let point = 0;
  if (document.querySelector("#pekin").checked) {
    point++;
  }
  if (document.querySelector("#london").checked) {
    point++;
  }
  if (document.querySelector("#sidney").checked) {
    point++;
  }
  if (document.querySelector("#rim").checked) {
    point++;
  }
  if (document.querySelector("#vena").checked) {
    point++;
  }
  if (document.querySelector("#byenos").checked) {
    point++;
  }

  par.textContent='Результат: ' + point + '/6'
});
