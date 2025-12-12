let numero1 = "";
let numero2 = "";
let operacion = null;   

function agregarNumero(num) {
    numero1 += num;
    actualizarPantalla();
}
function seleccionaOperador(op) {
    if (numero1 === "") return;
    operacion = op;
    numero2 = numero1;
    numero1 = "";
}
function resultado() {
    let resultado;

    const n1 = parseFloat(numero2);
    const n2 = parseFloat(numero1);
    
    if (isNaN(n1) || isNaN(n2)) return; 
    switch (operacion) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;  
            break;
        case "*":
            resultado = n1 * n2;  
            break;
        case "/":
            resultado = n1 / n2;  
            break;
        default:
            return;
    }             
    numero1 = resultado.toString();
    operacion = null;
    numero2 = "";
    actualizarPantalla();
}   
function limpiar() {
    numero1 = "";
    numero2 = "";
    operacion = null;
    actualizarPantalla();
}   
function actualizarPantalla() {
    const pantalla = document.getElementById("pantalla")
    pantalla.value = numero1;
}