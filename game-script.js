$(document).ready(function() {
    let health = 0.9;
    let spread = 0.2;
    let spreadPercentageCoeff = 0.1 * 0.001;
    let spreadPercentageSickCoeff = 0.1 * 0.001;
    let percentage;
    let percentageSick;
    let ran;
    let cell;
    let thresh;

    let i;
    let j;

    let slider = document.getElementById("range");
    slider.oninput = function() {
        document.getElementById("value").innerHTML = this.value;
    }

    $("#begin").click(function() {
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

                cell = document.getElementById(i);

                // Get people sick
                ran = Math.random();
                if (percentageSick == 0) {x}

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
        }, 1);

        $("#reset").click(function() {
            clearInterval(cycle);
            clearGrid();
        });
    });
});

function getRandomInt() {
    return (Math.floor(Math.random() * Math.floor(100)) + 1);
}

function clearGrid() {
    for (i = 1; i <= 100; i++) {document.getElementById(i).style.backgroundColor = "white";}
}