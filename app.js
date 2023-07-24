/* class TicketManager {
    constructor(){
        this.eventos = []
        this.precioBaseDeGanancias = 0
    }

    getEventos(){
        return this.eventos
    }

agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
    precio += precio *0,15
    const evento_id = this.eventos.length + 1
    const participantes = []
    const evento ={
        id: evento_id,
        nombre,
        lugar,
        capacidad,
        fecha,
        participantes
    }
    this.eventos.push(evento)
}

agregarUsuario(evento_id, usuario_id){
    const evento_encontrado = this.eventos.find((evento)=> evento.id ===evento_id)
    if(!evento_encontrado){
        console.log("El evento con el ID no existe")
        return
    }

    const participantes = evento_encontrado.participantes
    const usuarioRegistrado = participantes.includes(usuario_id)
    if(usuarioRegistrado){
        console.log("El usuario ya fue registrado para este evento")
        return
    }
    participantes.push(usuario_id)
    console.log("Usuario registrado correctamente")

}


ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha){
    const evento_encontrado = this.eventos.find((evento)=> evento.id === evento_id)
    if(!evento_encontrado){
        console.log("El evento seleccionado no existe")
        return
    }

    const evento_copiado = {...evento_encontrado}
    evento_copiado.id = this.eventos.length +1
    evento.lugas = this.nueva_localidad
    evento_copiado.fecha = nueva_fecha
    evento_copiado.participantes = []

    this.eventos.push(evento_copiado)
    console.log("El evento fue puesto en gira correctamente")

}
}



const ticketManager = new TicketManager

ticketManager.agregarEvento("concierto Pop", "Estadio A", 100, 2000, new date ("2023-09-27"))
ticketManager.agregarEvento("concierto Rock", "Estadio B", 200, 3000, new date ("2023-09-29"))


const eventos = ticketManager.getEventos()
console.log(eventos)


ticketManager.agregarUsuario(1,"Facundo")

ticketManager.agregarUsuario(2,"Pablo")

ticketManager.agregarUsuario(2,"Camila")


ticketManager.ponerEventoEnGira(1, "NuevoLugar", new Date("2023-08-09"))


const eventosActualizados = ticketManager.getEventos()
console.log("Eventos actualizados: ", eventosActualizados)




function mostrarLetras(cadena, segundos){
    let indice = 0
    const intervalo = setInterval(() => {
        console.log(cadena.carAt(indice))
        indie ++
        if (indice=== cadena.length){
            clearInterval(intervalo)
            console.log("terminado")
        }
    }, segundos)
}

cadena = hola

mostrarLetras(cadena, 255)


const fs = require ('fs').promises

async function readFile(){
    try{
        const data = await fs.readFile('miArchivo.txt', 'utf-8')

    }
    catch(error){
        console.log('Error al leer el archivo', error)

    }
}



async function writeFile(){
    const data = 'contenido de archivo'

    try{
        await fs.writeFile('miArchivo.txt', data)
        console.log('Archivo creado correctamente')
    }
    catch(error){
        console.log('Error al escribir el archivo')
    }
}

async function appenFile(){
    const data = "Datos agregados al archivo"
    try{
        await fs.appendFile("miArchivo.txt", data)
        console.log("Datos agregados")
    }
    catch(error){
        console.log("Error al agregar la informacion")
    }
}

async function inlink(){
    try{
        await fs.unlink(miArchivo.txt)
        console.log("Archivo eliminado correctamente")
    }
    catch(error){
        console.log("Error al eliminar archivo", error)
    }
}


async function mkDir(){
    try{
        await fs.mkdir("Carpeta")
        console.log("Directorio creado correctamente")
    }
    catch(error){
        console.log("Error al escribir el directorio", error)
    }
} */




class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(product){
        if (!this.isProductValid(product)){
            console.log("Error: Producto no valido")
            return
        }

        product.id= this.nextId++
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((p)=> p.id === id)
        if(product){
            return product
        }
        else{
            console.log("Error: El producto no fue encontrado")
        }
    }


    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some((p)=> p.code === code)
    }

}

const productManager = new ProductManager()

productManager.addProduct({
    
    title: "Mazo de cartas",
    description: "Cartas de magos",
    price: 50,
    code: "P001",
    stock: 5,
})

productManager.addProduct({
    
    title: "Gorra",
    description: "Gorra de magos",
    price: 100,
    code: "P002",
    stock: 3,
})

productManager.addProduct({
    
    title: "Varita",
    description: "Varita de magos",
    price: 25,
    code: "P003",
    stock: 7,
})


const productsList = productManager.getProducts()

console.log(productsList)