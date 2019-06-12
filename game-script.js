$(document).ready(function() {
    let health = 0.9;
    let spread = 0.2;
    let spreadPercentageCoeff = 0.1 * 0.001;
    let spreadPercentageSickCoeff = 10;
    let percentage;
    let percentageSick;
    let ran;
    let cell;
    let thresh;
    let generation;
    let generationOut = document.getElementById("generation");
    let slider = document.getElementById("range");
    console.log(generationOut);

    let i;
    let j;

    $("#begin").click(function() {
        console.log("button clicked");
        percentage = parseInt(slider.value);
        clearInterval();
        clearGrid();
        for (i = 1; i <= percentage; i++) {
            ran = getRandomInt();
            cell = document.getElementById(ran);
            while (cell.style.backgroundColor == "green") {
                ran = getRandomInt();
                cell = document.getElementById(ran);
            }
            cell.style.backgroundColor = "green";
        }

        // For each generation
        let cycle = setInterval(function() {
            for (i = 1; i <= 100; i++) {

                // Determine number of sick
                percentageSick = 0;
                for (j = 1; j <= 100; j++) {
                    cell = document.getElementById(j);
                    if (cell.style.backgroundColor == "red") {percentageSick++;}
                }
                console.log("precenteasgf" + percentageSick);
                cell = document.getElementById(i);

                // Get people sick
                ran = Math.random();
                if (percentageSick == 0) {thresh = spread;}
                else {thresh = spread * percentage * spreadPercentageCoeff * percentageSick * spreadPercentageSickCoeff;}

                console.log(thresh);
                if ((cell.style.backgroundColor == "white") && (ran < thresh)) {
                    console.log("s");
                    cell.style.backgroundColor = "red";
                }

                // Heal people
                ran = Math.random();
                if ((cell.style.backgroundColor == "red") && (ran < health)) {
                    cell.style.backgroundColor = "white";
                }
            }

            generation++;
            generationOut.innerHTML = generation;
        }, 50);

        $("#reset").click(function() {
            clearInterval(cycle);
            clearGrid();
        });
    });

    slider.oninput = function() {
        document.getElementById("value").innerHTML = this.value;
    }

    // Functions

    function getRandomInt() {
        return (Math.floor(Math.random() * Math.floor(100)) + 1);
    }

    function clearGrid() {
        for (i = 1; i <= 100; i++) {document.getElementById(i).style.backgroundColor = "white";}
        generation = 0;
        generationOut.innerHTML = generation;
    }

});