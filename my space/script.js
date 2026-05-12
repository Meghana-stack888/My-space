const button = document.querySelector("button");
button.addEventListener("click", function(){
const username = document.getElementById("nameInput").value;

localStorage.setItem("username", username);
window.location.href = "dashboard.html";
});