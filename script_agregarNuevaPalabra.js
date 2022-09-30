var nueva_palabra = document.querySelector(".textarea_nuevaPalabra");
const mensajeAlerta = document.getElementById("alerta_mensaje");
var boton_cancelar = document.getElementById("btn_cancelar");

nueva_palabra.focus();
nueva_palabra.oninput = function () {
    if (this.value.length == 0) {
        mensajeAlerta.textContent = "Máx. de 8 letras!!!";
    } else {
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8);
            mensajeAlerta.textContent = "Máx. de 8 letras!!!";
        }
    }
}

function validar_mensaje(event) {
    
    const sim_alerta_i = String.fromCharCode(33).toString();
    const sim_alerta_f = String.fromCharCode(161).toString();

    var charCode = event.charCode;

    if (charCode != 0) {
        if (charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122) {
            event.preventDefault();
            mensajeAlerta.textContent = sim_alerta_i + "Por favor usa sólo"
                + " letras " + sim_alerta_f;
        } else {
            //mensajeAlerta.textContent = "Sólo letras minúsculas y sin acentos.";
        }
    }
}

boton_cancelar.addEventListener("click", function () {
    window.history.back();
}, false);


