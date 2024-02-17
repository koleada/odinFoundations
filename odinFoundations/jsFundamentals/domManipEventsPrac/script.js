// reference the input 
const input = document.querySelector("#usrIn");

// reference the ul
const list = document.querySelector("#list");

//select button and add onclick listener. When clicked, create a new li set the innerHTML of it to the value of the input. Append the li to the ul.
document.querySelector("#btn").addEventListener("click", () => {


    //create new li and set the innerHTML of it to the value of the input
    let li = document.createElement("li");
    li.innerHTML = input.value;

    //create a delete button, add margin to seperate from the user input, add onclick listener to remove the li from the list if delete button is clicked 
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.margin = "15px";
    //note that we add the listener inside of another listener as opposed to creating the element then adding the listener outside of the block.
    deleteBtn.addEventListener("click", function(e) {
        list.removeChild(e.target.parentElement);
    });

    //append btn to li
    li.appendChild(deleteBtn);

    //append li to ul
    list.appendChild(li);

    //alert the user the value is being added.
    alert("Adding " + input.value + " to the list...");

    //reset the value of the input to an empty string
    input.value = "";
});

