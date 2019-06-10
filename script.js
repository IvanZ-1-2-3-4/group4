let i = 0;
let str = "";
$(document).ready(function() {
    $("#f1").click(function() {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
    });
    $("#f2").click(function() {
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    });
    $("#f3").click(function() {
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
    });
    $("#f4").click(function() {
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "block";
    });
    $("#b1").click(function() {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
    });
    $("#b2").click(function() {
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    });
    $("#f3").click(function() {
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
    });

    $("#s1").click(function() {
        console.log("click");
        for (i = 1; i <= 4; i++) {
            str = "m" + i;
            console.log(document.getElementById(str));
            document.getElementById(str).style.display = "none";
        }
        document.getElementById("m1").style.display = "block";
    });
    $("#s2").click(function() {
        for (i = 1; i <= 4; i++) {
            str = "m" + i;
            document.getElementById(str).style.display = "none";
        }
        document.getElementById("m2").style.display = "block";
    });
    $("#s3").click(function() {
        for (i = 1; i <= 4; i++) {
            str = "m" + i;
            document.getElementById(str).style.display = "none";
        }
        document.getElementById("m3").style.display = "block";
    });


});