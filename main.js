alert("Bienvenido a Deli Cookies") 
let nombre = prompt("Para comenzar tu pedido, ingresa tu nombre");
alert("Como va? " + nombre + ", comencemos!")
let entrega= prompt ("Ingrese \n 1 si retira en tienda \n 2 si es delivery");
const galletaClasica = 300;
const galletaChoco = 300;
const galletaNutella = 400;
const galletaAvena = 250;
const galletaDdl =  300;
let precioTotal = 0;

function precio (dato1, dato2) {
    resultado = dato1 * dato2
    return resultado
}

while((entrega!="0") && (entrega !="")){
    switch (entrega) {
        case "1":
        alert("Entrega en tienda")
        break;

        case "2":
        alert("Envio con delivery")
        let direccion = prompt("Ingresa la direccion del destino de la orden")
        alert("Tu orden ira a: " + direccion)
        break;

        default:
            alert("Opcion invalida")
            break;
    }
    entrega= prompt ("Escriba \n 0 para continuar")
}

let pedido = entrega

if (pedido == "0") {
    let sabores = prompt("Por favor, seleccione los sabores de las galletas \n 1 Clasica \n 2 Chocolate \n 3 Nutella \n 4 Avena \n 5 Dulce de leche \n x para finalizar")
    while (sabores != "x") {
        switch (sabores){
            case "1":
            let cantidadClasica = prompt("Ingrese la cantidad");
            precioTotal = parseInt(precioTotal + precio(galletaClasica, cantidadClasica));
            alert ("El precio total es " + "$ " + precioTotal);
            break;

            case "2":
            let cantidadChoco = prompt("Ingrese la cantidad");
            precioTotal = parseInt(precioTotal + precio(galletaChoco, cantidadChoco));
            alert ("El precio total es " + "$ " + precioTotal);
            break;

            case "3":
                let cantidadNutella = prompt("Ingrese la cantidad");
                precioTotal = parseInt(precioTotal + precio(galletaNutella, cantidadNutella));
                alert ("El precio total es " + "$ " + precioTotal);
                break;

            case "4":
                let cantidadAvena = prompt("Ingrese la cantidad");
                precioTotal = parseInt(precioTotal + precio(galletaAvena, cantidadAvena));
                alert ("El precio total es " + "$ " + precioTotal);
                break;

            case "5":
                let cantidadDdl = prompt("Ingrese la cantidad");
                precioTotal = parseInt(precioTotal + precio(galletaDdl, cantidadDdl));
                alert ("El precio total es " + "$ " + precioTotal);
                break;

            default:
            alert("Opcion no valida");
            break;
    }
    sabores = prompt("Por favor, seleccione los sabores de las galletas \n 1 Clasica \n 2 Chocolate \n 3 Nutella \n 4 Avena \n 5 Dulce de leche \n x para finalizar");
    }
}



