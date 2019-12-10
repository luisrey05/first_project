
let modal = document.querySelector("#simpleModal");

let modalBtn = document.querySelector("#modalBtn");

let closeBtn = document.querySelector(".closeBtn");


modalBtn.addEventListener("click", openModal);


closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", clickOutside);


function openModal() {
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
