var tablero = document.getElementById("forca");
var pincel = tablero.getContext("2d");

function dibujarCanvas() {
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#0A3871";

    pincel.fillRect(0, 0, 1200, 860);
    pincel.beginPath();
    pincel.moveTo(300, 600);
    pincel.lineTo(800, 600);
    pincel.stroke();
    pincel.closePath();
}

function dibujarLinea() {

    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#0A3871";

    let anchura = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {

        pincel.moveTo(300 + (anchura * i), 700)
        pincel.lineTo(350 + (anchura * i), 700)
    }

    pincel.stroke();
    pincel.closePath();
}

