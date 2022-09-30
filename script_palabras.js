var palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS","CHALLENGE"];

function guardar_y_empezar() {
    //convertimos las palabras de minúsculas a mayúsculas
    var mayusculas_nuevaPalabra = nueva_palabra.value;
    var anhadir_nuevaPalabra = mayusculas_nuevaPalabra.toUpperCase();
    
    // Se guarda en localStorage despues de JSON stringificarlo 
    //localStorage.setItem('palabraSecreta',JSON.stringify(this.palabras));
    localStorage.setItem('palabraSecreta', JSON.stringify(palabras));

    // if (localStorage.getItem('palabraSecreta') == null) {
    //     localStorage.setItem('palabraSecreta', '[]');
    // }

    //var array_palabras = JSON.parse(localStorage.getItem('palabraSecreta'));

    var array_palabras = localStorage.getItem('palabraSecreta');
    array_palabras = array_palabras === null ? [] : JSON.parse(array_palabras);
    
    //agrego nueva palabra
    array_palabras.push(anhadir_nuevaPalabra);

    localStorage.setItem('palabraSecreta', JSON.stringify(array_palabras));
    
    console.log(array_palabras);
    document.location.href = "horca.html";
}


