const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

// METHOD 2
btn.onclick = () => alert("Hello World");

//method 3 -- note the "function(e) is not necessary this is just passing in information about the event to the function "
btn2.addEventListener("click", (e) => {
  e.target.style.background = "blue";
  alert("I think I'm gonna turn blue!");
  console.log(e.target);
});
