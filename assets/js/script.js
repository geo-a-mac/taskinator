var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", alertIT);

function alertIT () {
    alert("button clicked");
}