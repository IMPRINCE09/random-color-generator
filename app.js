const getColor = () => {
  const randomcolor = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + randomcolor.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.getElementById("color-code").innerText = randomcode;
  document.clipboard.writeText(randomcode);
};
document.getElementById("btn");
document.addEventListener("click", getColor);

getColor();
