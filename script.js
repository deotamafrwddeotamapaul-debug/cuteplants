document.body.style.background = "pink";

const stem = document.querySelector(".stem");
const leaves = document.querySelectorAll(".leaf");
const hat = document.querySelector(".wizard-hat");

stem.style.height = "140px";
stem.style.background = "red";

leaves.forEach(l => l.style.opacity = 1);
hat.style.opacity = 1;

alert("JS IS DEFINITELY RUNNING");
