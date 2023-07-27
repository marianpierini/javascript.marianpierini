class Producto {
    constructor (nombre, precio, cantidad, desc, total) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
        this.subTotal = this.precio * this.cantidad
        this.desc = desc
        this.total = total
    }

    
 
    codDescuento () {
        this.desc = prompt ("tienes un codigo de descuento?")
        if (this.desc.toLowerCase() == "si" ) {
         let codigo = "boca"
         do {
        codigo = prompt ("Ingrese codigo de descuento")
        } while (codigo != "boca") 
        let bonificacion = 0.8
           alert ("Tu total a pagar es de $" + this.subTotal * bonificacion)
        }  else {
           alert ("Total a pagar $" + this.subTotal)
        }
        }
        


    formaDePago () {

            let bonificacion = 0.8
            if (this.desc == "si" || this.desc == "Si" || this.desc == "SI") {
            this.total = this.subTotal * bonificacion
                    
            } else {
                this.total = this.subTotal * 1
                
            }
            const calculoCuotas = (a,b) => a / b
            let pago = prompt ("Como deseas abonar: efectivo o tarjeta de credito?")
            if (pago == "efectivo") { 
                alert ("tu saldo a abonar es " + this.total)
            } else if (pago == "tarjeta") {
                let cuota = prompt ("Deseas abonarlo en 3, 6 o 12 cuotas?")
                switch (cuota) {
                    case "3" : 
                        alert ("Pagaras 3 cuotas de $" + calculoCuotas (this.total,3))
                        break
                    case "6" :
                        alert ("Pagaras 6 cuotas de $" + calculoCuotas (this.total,6))
                        break
                    case "12" :
                        alert ("Pagaras 12 cuotas de $" + calculoCuotas (this.total,12))
                        break
                        default :
                        alert ("Operacion no disponible")    
            } }else {
                    alert ("Forma de pago no disponible")}
            }

            }

            const productos = []

            let agregarProductos = "si"
            
            while (agregarProductos) {
                const nombre = prompt("Ingrese producto")
                const precio = prompt("Ingrese precio")
                const cantidad = prompt("Ingrese cantidad")
            
                const producto = new Producto(nombre, precio, cantidad)
                productos.push(producto)
            
                agregarProductos = prompt("¿Deseas agregar otro producto? (si/no)") == "si"
            }

            for (const producto of productos) {
                producto.codDescuento()
                producto.formaDePago()
            }

            const baratos = productos.filter(producto => producto.precio <300)
            const oferta = productos.filter (producto=> producto.desc == "si") 
    