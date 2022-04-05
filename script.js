// let difficultySelection;
// let event;

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function generateGrid(numBoxes, boxesPerSide);{ 
    const app = document.getElementById("app");
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute("class", "gridrow");
    for (let i = 1; i <= numBoxes; i++) {
        const box = generateCell(i, boxesPerSide);
        row.append(box);
    }
      app.append(row);
}

function generateCell(numBoxes, boxesPerSide) {
    let box = document.createElement("div");
    square.setAttribute("class", "box");
    square.style.width = `calc(100% / ${boxesPerSide})`;
    square.style.height = `calc(100% / ${boxesPerSide})`;
    square.classList.add("pointer");
    square.innerHTML = `<span>${numBoxes}</span>`;
    square.addEventListener("click", colorBox);
    return box;
}



function difficultySelection(event) {
    const difficultySelection = document.getElementById("difficultySelection").value;
    console.log("selected level: ", difficultySelection);
    let numBoxes;
  switch (difficultySelection) {
    case "1":
    default:
      numBoxes = 100;
      break;
    case "2":
      numBoxes = 81;
      break;
    case "3":
      numBoxes = 49;
      break;
    }
  let boxesPerSide = Math.sqrt(numBoxes); 
  console.log("box per lato: ", boxesPerSide);
  generateBomb(numBoxes);
  generaGriglia(numBoxes, boxesPerSide);
}
document.getElementById("btn-play").addEventListener("click", setLevel);