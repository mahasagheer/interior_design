const cookie = setTimeout(() => {
  alert("DO YOU ACCEPT OUR COOKIES");
}, 10000);
let emailSubmit = document
  .getElementById("submit")
  .addEventListener("click", email);
function email() {
  let text =
    "Thank you for signing up! You're not opted in yet. Please go to your email to confirm that you want to receive email from Interior Design.";
  document.getElementById("inbox").innerHTML = text;
}
