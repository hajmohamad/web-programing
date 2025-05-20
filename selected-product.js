const modal = document.getElementById("myModal");
const btn = document.querySelector(".open-modal-btn");
const span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
function goToPage() {
  window.location.href = "card-pay.html"}