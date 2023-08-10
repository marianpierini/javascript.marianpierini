const botonCarrito = document.querySelector(".compraCarrito")
const mostrarCarrito = document.querySelector(".contenidoCarrito")

botonCarrito.addEventListener("click", ()=> {
    mostrarCarrito.classList.toggle("ocultarCarrito")
})

const productoComprado = document.querySelector(".productoComprado")
const contenedorProductoComprado = document.querySelector(".contenedorProductoComprado")
const productosSeleccionados = document.querySelector(".productosSeleccionados")
let compraProductos = []
const total = document.querySelector (".precioTotalPagar")
const contadorCarrito = document.getElementById ("contadorCarrito")
const precioFinal = document.querySelector (".precioFinal")
const descuento = document.getElementById("descuento")
let codigoDesc = document.getElementById ("codigo")
const efectivo = document.getElementById("efectivo")
const tarjeta = document.getElementById("tarjeta")
const mensajePago = document.getElementById("mensajePago")
const cuotasOcultas = document.querySelector(".cuotasOcultas")
const cuota3 = document.getElementById ("cuota3")
const cuota6 = document.getElementById ("cuota6")
const cuota12 = document.getElementById ("cuota12")


productosSeleccionados.addEventListener ("click", e => {
if (e.target.classList.contains ("precio")) {
    const producto = e.target.parentElement
    const infoProducto = {
        quantity: 1,
        producto: producto.querySelector("h5").innerText,
        precio: producto.querySelector("span").innerText
    } 

    const productoRepetido = compraProductos.some(producto => producto.producto === infoProducto.producto)

    if (productoRepetido) {
        compraProductos.forEach(producto=> {
        producto.producto === infoProducto.producto && producto.quantity++
    })
    
} else {
    compraProductos.push(infoProducto)
}
  mostrarCompraCarrito()
  actualizarCarrito ()
  agregarTotal()
    }
})

contenedorProductoComprado.addEventListener("click", e => {
    if 
        (e.target.classList.contains("cerrarIcono")) {
            const producto = e.target.parentElement.parentElement
            const nombreProducto = producto.querySelector(".infoProducto").innerText

            compraProductos = compraProductos.filter (
                producto => producto.producto !== nombreProducto
            )
            mostrarCompraCarrito()
            actualizarCarrito()
            agregarTotal()
        }
    
    
})

const mostrarCompraCarrito = () => {

    contenedorProductoComprado.innerHTML = ""

    let totalEnCarrito = 0
    let totalCadaProducto = 0

    compraProductos.forEach (producto =>{
        const contenedorProducto = document.createElement("div")
        contenedorProducto.classList.add("productoComprado")
        contenedorProducto.innerHTML = 
        `
        <div class="descripcionProducto">
        <span class="cantidadProducto">${producto.quantity}</span>
        <p class="infoProducto">${producto.producto} </p>
        <span class="precioProductoCarrito"> ${producto.precio}</span>
        </div>
        <svg class="bg-white cerrarIcono" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path class="cerrarIcono" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        `

        contenedorProductoComprado.append(contenedorProducto)
        totalEnCarrito = totalEnCarrito + parseInt (producto.quantity * producto.precio.slice(1))
        totalCadaProducto = totalCadaProducto + producto.quantity
    })
    total.innerText =  `  ${totalEnCarrito}`
    contadorCarrito.innerText = totalCadaProducto
        
}


document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = localStorage.getItem("carrito") 
    carritoGuardado && (compraProductos = JSON.parse(carritoGuardado)); mostrarCompraCarrito(); agregarTotal()
})

const actualizarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(compraProductos))
}

function agregarTotal () {
    precioFinal.innerText = `Total:$ ${total.innerText}`
}
const mensaje = document.getElementById("mensaje")
descuento.addEventListener("click", agregarDescuento)
function agregarDescuento(e) {
    e.preventDefault()
    descuento.children[0].value != "boca" ? mensaje.innerText = `${""}` : mensaje.innerText = `Tu precio ahora es de: $ ${total.innerText * 0.8 }` 
    }

efectivo.addEventListener("click", pagoEfectivo)
tarjeta.addEventListener ("click", pagoTarjeta)
cuota3.addEventListener("click", calculoCuotas3)
cuota6.addEventListener("click", calculoCuotas6)
cuota12.addEventListener("click", calculoCuotas12)

function pagoEfectivo () {
    descuento.children[0].value != "boca" ? mensajePago.innerText = `Tienes que pagar $ ${total.innerText}` : mensajePago.innerText = `Tienes que pagar $ ${total.innerText * 0.8}`
}
function pagoTarjeta () {
    cuotasOcultas.classList.toggle("cuotasOcultas")
    }
function calculoCuotas3 () {
    descuento.children[0].value != "boca" ? mensajePago.innerText = `Tienes que pagar 3 cuotas de $ ${total.innerText / 3}` : mensajePago.innerText = `Tienes que pagar 3 cuotas de $ ${(total.innerText * 0.8) / 3}`
    }
function calculoCuotas6 () {
    descuento.children[0].value != "boca" ? mensajePago.innerText = `Tienes que pagar 6 cuotas de $ ${total.innerText / 6}` : mensajePago.innerText = `Tienes que pagar 6 cuotas de $ ${(total.innerText * 0.8) / 6}`
    }
function calculoCuotas12 () {
    descuento.children[0].value != "boca" ? mensajePago.innerText = `Tienes que pagar 12 cuotas de $ ${total.innerText / 12}` :  mensajePago.innerText = `Tienes que pagar 12 cuotas de $ ${(total.innerText * 0.8) / 12}`
}
