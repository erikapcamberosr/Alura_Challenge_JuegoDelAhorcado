function palo_uno() {
    pincel.fillStyle = "PURPLE";
    pincel.fillRect(50, 300, 200, 10);
}

function palo_dos() {
    pincel.fillStyle = "PURPLE";
    pincel.fillRect(330, 300, 10, 300);
}

function palo_tres() {
    pincel.fillStyle = "PURPLE";
    pincel.fillRect(330, 300, 150, 10);
}

function cuerda() {
    pincel.fillStyle = "PURPLE";
    pincel.fillRect(470, 300, 10, 40);
}

function circulo_cbz() {
    pincel.beginPath();
    pincel.arc(480, 362, 25, 0, 2 * Math.PI);
    //pincel.fillStyle = "#800080";
    pincel.strokeStyle = "PURPLE";
    pincel.lineWidth = 7;
    pincel.stroke();
}

function cuerpo() {
    pincel.fillStyle = "PURPLE";
    pincel.fillRect(470, 383, 10, 130);
}

function pierna_uno() {
    pincel.lineWidth = 6;
    pincel.strokeStyle = "PURPLE";
    pincel.beginPath();
    pincel.moveTo(430, 550);
    pincel.lineTo(470, 510);
    pincel.stroke();
}

function pierna_dos() {
    pincel.lineWidth = 6;
    pincel.strokeStyle = "PURPLE";
    pincel.beginPath();
    pincel.moveTo(480, 510);
    pincel.lineTo(520, 540);
    pincel.stroke();
}

function brazo_uno() {
    pincel.lineWidth = 6;
    pincel.strokeStyle = "PURPLE";
    pincel.beginPath();
    pincel.moveTo(430, 450);
    pincel.lineTo(470, 410);
    pincel.stroke();
}

function brazo_dos() {
    pincel.lineWidth = 6;
    pincel.strokeStyle = "PURPLE";
    pincel.beginPath();
    pincel.moveTo(480, 410);
    pincel.lineTo(530, 440);
    pincel.stroke();
}
