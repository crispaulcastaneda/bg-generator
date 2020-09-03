const styling = document.querySelector("h3");
const colorOne = document.querySelector(".colorOne");
const colorTwo = document.querySelector(".colorTwo");
const body = document.getElementById("gradient");

setGradient = () => {
    body.style.background = "linear-gradient(to right, "
    + colorOne.value
    + ", "
    + colorTwo.value
    + ")";

    styling.textContent = body.style.background + ";";
}

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);