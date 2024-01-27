const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
// METHOD 2
btn.onclick = () => alert("Hello World");

// METHOD 3
btn.onclick = () => alert("Hello World");

btn2.addEventListener("click", function(e) {
  e.target.style.background = "blue";
  alert("I think I'm gonna turn blue!");
  console.log(e.target);
});
