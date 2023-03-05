function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}

let inc = document.querySelectorAll(".increment");
let dec = document.querySelectorAll(".decrement");
let value = document.querySelectorAll(".value");
for (let i = 0; i < inc.length; i++) {
  inc[i].addEventListener("click", function () {
    value[i].innerText = increment(parseInt(value[i].innerText));
  });
}
for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener("click", function () {
    if (parseInt(value[i].innerText) > 1) {
      value[i].innerText = decrement(parseInt(value[i].innerText));
    }
  });
}

let icons = document.querySelector(".icons");
icons.addEventListener("click", function () {
  if (icons.style.color == "red") {
    icons.style.color = "black";
  } else {
    icons.style.color = "red";
  }
});


