const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset-btn");
const CONTAINER_SIZE = 640;

function createGrid(squaresPerSide) {
  container.innerHTML = "";
  const squareSize = CONTAINER_SIZE / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(square);
  }
}

resetBtn.addEventListener("click", () => {
  let size = parseInt(prompt("Enter grid size (max 100):"));
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);
