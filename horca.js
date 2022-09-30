var palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS", "CHALLENGE"];

var palabraSecreta = "";
var buscarLetra = "";
var tamanho_palabra = 0;
var contar_letras_encontradas = 0;
var contador_letrasNoEncontradas = 0;

function escojerPalabraSecreta() {
    
    let escogerPalabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = escogerPalabra;
    console.log(palabraSecreta + " palabra secreta");
    
    buscarLetra = palabraSecreta.split('');
    tamanho_palabra = buscandoRepetidas.length;
    console.log(buscarLetra);  
}

document.addEventListener('keydown', (event) => {
    let letra = event.key;
    let code_letra = event.code;
    if (code_letra == "Enter" || code_letra == "CapsLock" || code_letra == "Space"
        || code_letra == "Escape" || code_letra == "Backspace" || code_letra == "Tab"
        || code_letra == "" || code_letra == "ShiftLeft" || code_letra == "ShiftRight"
        || code_letra == "ControlRight" || code_letra == "ControlLeft" || code_letra == "Delete"
        || code_letra == "AltLeft" || code_letra == "AltRight"){

    }else{
        empezarBusqueda(letra);                              
    }
    
}, false);

function empezarBusqueda_MAP(letra_tecleada){
    var nuevoArray = buscarLetra.map(elemento => elemento == letra_encontrada);
}

function empezarBusqueda(letra_tecleada) {
    let letra = letra_tecleada.toUpperCase();
    var letraEncontrada = buscarLetra.find(elemento => elemento == letra);
    
    var p = 0;
    var indices = [];

    if (letraEncontrada === undefined) {
        letra_NO_encontrada(letra);
    } else {
        indices = encontrarLetraSecreta(buscarLetra, letra);
        if (indices.length == 1) {
            p = indices[0];
            letra_encontrada(letraEncontrada, p);
        } else {
            for (let i = 0; i < indices.length; i++) {
                p = indices[i];
                letra_encontrada(letraEncontrada, p);
            }
        }
    }
}

function encontrarLetraSecreta(buscarLetra, letra) {

    var indices = [];
    var idx = buscarLetra.lastIndexOf(letra);
    //console.log(idx + " idx");
    while (idx != -1) {
        indices.push(idx);
        idx = (idx > 0 ? buscarLetra.lastIndexOf(letra, idx - 1) : -1);
    }

    return indices;
}

function letra_encontrada(letra, p) {
    var posicion = 600 / palabraSecreta.length;
    var centerX = 310;

    pincel.font = "30pt Verdana";
    pincel.fillStyle = "blue";
    pincel.fillText(letra, centerX + (posicion * p), 690);
    teSalvaste();
}

//var contar_letras_encontradas = 0;
function teSalvaste() {
   
    contar_letras_encontradas++;
    
    if (contar_letras_encontradas == palabraSecreta.length) {
        //console.log("te salvaste");
        swal({
            title: 'Ganaste',
            text: 'Felicidades!',
            icon: 'success',
            button: "otro juego...",            
        }).then((willNewGame) =>{
            iniciarJuego();
        });        
    }
}

var contador = 0;
const eval_letra = new Set();

function letra_NO_encontrada(letra) {
    
    contador_letrasNoEncontradas++;    
    //console.log(contador_letrasNoEncontradas + " contador letras no encontradas");

    let busqueda = buscandoRepetidas(letra);
    //console.log(busqueda);

    if(busqueda == true){
        console.log("repetidas");
    }else{
        let posicion = 30;
        var centerX = 310;

        eval_letra.add(letra);
        console.log(eval_letra);

        pincel.font = "20pt Verdana";
        pincel.fillStyle = "red";
        pincel.fillText(letra, centerX + (posicion * contador++), 760);

    }
    
    ahorcado(contador_letrasNoEncontradas, tamanho_palabra);
}


var letraDetectada = [];
letraDetectada[0] = "";
function buscandoRepetidas(letra){   
       
    console.log(letraDetectada[0] + " detectada");

    if (letraDetectada[0] === letra) {
        return true;
    }else{
        letraDetectada[0] = letra;        
        return false;          
    }
}

function ahorcado(contador_letrasNoEncontradas, num_tamanho_palabra) {
    
    var calculado_intentos = 8 / num_tamanho_palabra;
    console.log(calculado_intentos);

    if (contador_letrasNoEncontradas == 1) {
        palo_dos();
    } else if (contador_letrasNoEncontradas == 2) {
        palo_tres();        
    }else if (contador_letrasNoEncontradas == 3){
        cuerda();
    } else if (contador_letrasNoEncontradas == 4){
        circulo_cbz();
    } else if (contador_letrasNoEncontradas == 5) {
        cuerpo();
    } else if (contador_letrasNoEncontradas == 6) {
        pierna_uno();
    }else if (contador_letrasNoEncontradas == 7) {
        pierna_dos();
    } else if (contador_letrasNoEncontradas == 8) {
        brazo_uno();
    } else if (contador_letrasNoEncontradas == 9) {
        brazo_dos();
        swal({
            title: 'Ahorcado!!!',
            text: 'Nos vemos en otra ocasión!',
            icon: 'error',
            button: "Adios",
        }).then((willNewGame) => {
            iniciarJuego();
        });        
    }
}

function desistir() {
    console.log("desistir");
    palo_dos();
    palo_tres();
    cuerda();
    circulo_cbz();
    cuerpo();
    pierna_uno();
    pierna_dos();
    brazo_uno();
    brazo_dos();
    swal({
        title: 'No Desistas!!! Tu puedes.',
        text: 'Nos vemos en otra ocasión!',
        icon: 'error',
        button: "Adios",
    }).then((willNewGame) => {
        iniciarJuego();
    });        

}

function nuevoJuego() {
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    contar_letras_encontradas = 0;
    contador = 0;
}

function iniciarJuego() {
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    contar_letras_encontradas = 0;
    contador_letrasNoEncontradas = 0;
    contador = 0;
}



