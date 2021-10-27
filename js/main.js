function togole() {
  let x = document.getElementById("down");
  let y = document.getElementById("down-1");
  x.addEventListener("click", () => {
    y.classList.toggle("active");
  });
}
togole();

function accordion() {
  let x = document.getElementById("clic");
  let y = document.getElementById("sec");
  x.addEventListener("click", () => {
    y.classList.toggle("down-2");
  });
}
accordion();


function accordion1() {
  let x = document.getElementById("clic2");
  let y = document.getElementById("sec2");
  x.addEventListener("click", () => {
    y.classList.toggle("down-2");
  });
}
accordion1();

function accordion2() {
  let x = document.getElementById("clic3");
  let y = document.getElementById("sec3");
  x.addEventListener("click", () => {
    y.classList.toggle("down-2");
  });
}
accordion2();
