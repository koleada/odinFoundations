//default color
let color = "#934A9F";
//grid div
let grid = document.getElementById("grid");
// default size = 16
let gridSize = 16;

//onload put in the grid
addEventListener("load", () => {
  updateGrid(gridSize);
});

//function to update the grid with users selected size
function updateGrid(gridSize) {
  // this drops a bunch of info on grid which allows us to know the width which changes dynamically
  let positionInfo = grid.getBoundingClientRect();
  let width = positionInfo.width;
  // base size for each cell
  let cellSize = width / gridSize;

  //fills grid div with "rows" if 16X16 then there will be 16 row created with 16 cells in each row. Rows will fit to grid and the cells will fit to the rows. I was unable to fill
  //the grid without the rows, I think flexboxes can only fit horizontally or vertically without the use of inner flexboxes, so this did the trick!
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    // make each row flex and set to 100% width of grid
    row.style.display = "flex";
    row.style.width = "100%";

    //populate each row with correct number of cells
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = cellSize + "px";

      row.appendChild(cell);
    }
  }
}

//function to gen random color, picks 3 nums 1-255 (inclusive) rounds them to ints and formats them to be used as rgb colors for css background-color (for rainbowBtn)
function genRandomColor() {
  let red = Math.round(Math.floor(Math.random() * 255 + 1));
  let green = Math.round(Math.floor(Math.random() * 255 + 1));
  let blue = Math.round(Math.floor(Math.random() * 255 + 1));

  console.log("rand = " + red + " " + green + " " + blue);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

const colorPicker = document.getElementById("colorpicker");
//looks for change on color input, sets color to chosen color in hex, input fields are easy, add listener for change set var to e.target.value
colorPicker.addEventListener("change", e => {
  color = e.target.value;
});

let rainbow = false;
//true if mouse is held down, false when released
let down = false;
//mouseover will fill in all cells that are hovered over
grid.addEventListener("mouseover", function(e) {
  // if mouse is held down fill accordingly
  if (down == true) {
    // if rainbow = true, pick new random color for each cell
    if (rainbow == true) {
      //check to see if e.target is of class "cell" we dont want to fill in rows!
      if (e.target.classList.contains("cell")) {
        color = genRandomColor();
        e.stopPropagation();
        e.target.style.backgroundColor = color;
      }
    }
    // if rainbow = false proceed as normal
    if (e.target.classList.contains("cell")) {
      e.stopPropagation();
      e.target.style.backgroundColor = color;
    }
  }
  // if mouse is down, down=true thus all cells hovered over while mouse is down will be filled
  grid.addEventListener("mousedown", e => {
    down = true;
  });
  // when mouse is released, down=false thus cells hovered over will no longer be filled
  grid.addEventListener("mouseup", function() {
    down = false;
  });
});

// looks for clicks (fills in single cell)
grid.addEventListener("click", function(e) {
  //if rainbow = true, gen random color each for each cell
  if (rainbow == true) {
    if (e.target.classList.contains("cell")) {
      color = genRandomColor();
      e.stopPropagation();
      e.target.style.backgroundColor = color;
    }
  } else if (e.target.classList.contains("cell")) {
    // if rainbow = false proceed as normal
    e.stopPropagation();
    e.target.style.backgroundColor = color;
  }
});

//clear colors
const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
  const cell = document.getElementsByClassName("cell");
  //iterates through all current cells and sets their background color to the background color of the body
  for (let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = "#cbccca";
  }
});

const rainbowBtn = document.getElementById("rainb");
//keeps track of if its first or second time being clicked
let click = 0;
//sets rainbow to true when clicked for the first time, when clicked for the second time sets rainbow to back to false and sets color back to the default (rand color for each cell when on)
rainbowBtn.addEventListener("click", function(e) {
  if (click == 0) {
    rainbow = true;
    click = 1;
    console.log(click + " " + rainbow);
  } else if (click == 1) {
    rainbow = false;
    click = 0;
    color = "#934A9F";
  }
});

const gridRange = document.getElementById("gridRange");
const gridVal = document.getElementById("gridVal");
//event to change grid size agin using a form of the input tag (slider this time) but same thing, set var to the inputs new val and update text accordingly
gridRange.addEventListener("change", e => {
  gridSize = e.target.value;
  const cell = document.getElementsByClassName("cell");
  // removes all children from the grid (rows and cells)
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  //Change text to reflect changes
  gridVal.innerHTML = "Current Size: " + gridSize + "x" + gridSize;
  //updateGrid with new gridSize
  updateGrid(gridSize);
});
