$(document).ready(function() {
    let cont = 0.3;
    let i = 0;
    let percentage;
    let ran;
    let cell;

    let slider = document.getElementById("range");
    slider.oninput = function() {
        document.getElementById("value").innerHTML = this.value;
    }

    $("#begin").click(function() {
        percentage = parseInt(slider.value);
        clearInterval();
        for (i = 1; i <= percentage; i++) {
            ran = getRandomInt();
            cell = document.getElementById(ran);
            while (cell.style.backgroundColor == "green") {
                ran = getRandomInt();
                cell = document.getElementById(ran);
            }
            cell.style.backgroundColor = "green";
        }

        let cycle = setInterval(function() {
            for (i = 1; i <= 100; i++) {
                cell = document.getElementById(i);
                if (cell.style.backgroundColor == "white") {
                }
            }
        }, 500);

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