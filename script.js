const colorMap = {
  rose: { backgroundColor: "#f1bfc0", color: "#2d2c38" },
  green: { backgroundColor: "#6e8880", color: "#ffffff" },
  grey: { backgroundColor: "#E7e3f1", color: "#2d2c38" },
  lavender: { backgroundColor: "#AFA3D5", color: "#2d2c38" },
  teal: { backgroundColor: "#ad525e", color: "#ffffff" },
  musk: { backgroundColor: "#c2d9d1", color: "#2d2c38" },
  naples: { backgroundColor: "#fad564", color: "#2d2c38" },
  salmon: { backgroundColor: "#e68b67", color: "#E7e3f1" },
};

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const { backgroundColor, color } = colorMap[e.target.id];
    body.style.backgroundColor = backgroundColor;
    body.style.transition = "all 0.5s ease-in-out";
    body.style.color = color;
  });
});

//generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 550);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    body.style.transition = "all 0.5s ease-in-out";
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
