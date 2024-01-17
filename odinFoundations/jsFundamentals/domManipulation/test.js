const container = document.querySelector("#container"); 

const test = document.createElement("div");
test.textContent = "this is pissing me off"; 
container.appendChild(test);

const newP = document.createElement("p");
newP.textContent = "Hey I'm red!"; 
newP.style.color = "red"; 
container.append(newP);

const newH = document.createElement("h3");
newH.textContent = "I'm a blue h3!";
newH.style.color = "blue"
container.append(newH);

const newDiv = document.createElement("div");
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink"

const newDivH = document.createElement("h1");
newDivH.textContent = "I'm in a div"
newDiv.appendChild(newDivH); 

const newDivP = document.createElement("p");
newDivP.textContent = "ME TOO!";
newDiv.appendChild(newDivP); 

container.append(newDiv);
