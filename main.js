const productos =[
    {id: 1, nombre: "clasica", precio: 300 },
    {id: 2, nombre: "choco", precio: 300 },
    {id: 3,nombre: "nutella", precio: 400 },
    {id: 4,nombre: "avena", precio: 250 }
]

const comprador=[]
let carrito=[]

function datosEntrega(){
    let nombre= prompt('Ingrese su nombre')
    let entrega= prompt ("Ingrese \n 1 si retira en tienda \n 2 si es delivery")
    if((nombre != "") && (entrega != "")){
        comprador.push(nombre)
        alert("sus datos quedaron guardados como:" + comprador.join("\n"))
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
}
}

alert("Bienvenido a Deli Cookies") 
datosEntrega()

    let seleccion = prompt('Desea comenzar la compra \n 1 si \n 2 no')
    
    while(seleccion!='1' && seleccion!='2'){
    alert('Ingrese \n 1 o \n 2')
    seleccion= prompt('Desea comenzar la compra \n 1 si \n 2 no')
}

        if(seleccion=='1'){
            alert('estos son nuestros productos')
            let galletas = productos.map((producto) => producto.nombre + '/' + '$' + producto.precio )
            alert(galletas.join(','))
        } else if(seleccion =='2'){
            alert('Gracias por visitarnos')
        }
while(seleccion !='2'){
    let cargarCarrito = prompt('Anade un producto al carrito \n 1 Clasica \n 2 Chocolate \n 3 Nutella \n 4 Avena ')

    const validProd= productos.find(el => el.id == cargarCarrito)

    let precio=0

    switch (cargarCarrito) {
        case '1':
            precio=productos[0].precio
            break;

        case '2':
            precio=productos[1].precio
            break;

        case '3':
            precio=productos[2].precio
            break;

        case '4':
            precio=productos[3].precio
            break;
    
        default:
            break;
    }

    carrito.push({validProd, precio})

    seleccion= prompt('Desea continuar comprando \n 1 si \n 2 no')

    while(seleccion =='2'){
        carrito.forEach((compraFinal) => {
            alert(`Producto: ${compraFinal.validProd.nombre}, Precio: ${compraFinal.precio}`)
        })
        break
    }
}


