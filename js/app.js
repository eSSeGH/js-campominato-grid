console.log("Campo Minato")

const btnPlay = document.getElementById("btn-play")

btnPlay.addEventListener("click", function (){

    let sideGrid = document.getElementById("level-form").value

    while (isNaN(sideGrid) || sideGrid > 50 || sideGrid < 10) {
        sideGrid = prompt("Inserisci un numero compreso tra 1 e 50")
    }

    let cellNum = sideGrid**2

    const gridEl = document.querySelector(".grid")

    for (i=0; i < cellNum; i++) {
        let num = i + 1
        console.log(i + 1)
    
        const cellEl = document.createElement("div")
        console.dir
    
        cellEl.className = "cell"
        cellEl.style.width = `calc(100%/ ${sideGrid})`
        cellEl.innerHTML = num
    
        gridEl.append(cellEl)
    
        cellEl.addEventListener("click", function () {
            console.log(`click ${num}`)
            cellEl.style.boxShadow = " 0 0 10px inset red"
        })
    }
})







