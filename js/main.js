const btnInputGriglia = document.getElementById("btn_input_griglia");

btnInputGriglia.addEventListener("click", function () {

    // recuperiamo input dall'html
    const numCellInput = document.getElementById("numCelle");


    revealGriglia(parseInt(numCellInput.value));




})

function revealGriglia(numCelle) {
    const gridSection = document.querySelector(".grid-section");



    gridSection.innerHTML = "";

    const finalCells = Math.pow(numCelle, 2);


    for (let i = 0; i < finalCells; i++) {


        const newCell = document.createElement("div");
        newCell.classList.add("grid-cell");
        newCell.style.flexBasis = 100 / numCelle + "%";
        newCell.style.width = `calc(100% / ${numCelle})`;

        newCell.addEventListener("click", function () {

            newCell.classList.toggle("bg-primary");
            newCell.innerHTML = `<div class="text-white fw-bold"> ${i}</div> `;
        });


        gridSection.append(newCell);

    }
}

