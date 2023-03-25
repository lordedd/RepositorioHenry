//Tres formas de escribir una funcion

//Primera
function sumaTres(x){
    return x + 3;
}

//Segunda
var sumaTres = function (x) {
    return x + 3;
}

//Tercera
var sumaTres = (x) => {
    return x + 3;
  }

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    return nombre;
    //console.log(nombre);
  }

//Funcion otraFuncion que realiza el llamado a otra funcion
function otraFuncion(){
   return console.log("el valor que retorna la Funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('Eduard'));
}

otraFuncion();