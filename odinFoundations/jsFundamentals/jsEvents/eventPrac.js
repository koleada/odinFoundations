
const btn = document.querySelector('#btn')
const btn2 = document.querySelector("#btn2")
  // METHOD 2
btn.onclick = () => alert("Hello World");
  
  // METHOD 3
btn2.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
  