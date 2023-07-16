class TicketManager {
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