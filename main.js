
/*------------FUNCION PARA REGISTRAR NUEVAS MASCOTAS------------*/ 
async function registrarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota:");
    let especie = prompt("Ingrese la especie (Perro, Gato, etc.):");
    let edad = parseInt(prompt("Ingrese la edad de la mascota:"));
    let peso = parseFloat(prompt("Ingrese el peso de la mascota en kg:"));
    let estado = validarEntrada(prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento):"), ["Sano", "Enfermo", "En tratamiento"]);

    alert("Registrando mascota... ⏳");
    await delayPromise(2000);  // REALIZA UN RETARDO DE 2 SEGUNDOS
    mascotas.push({ nombre, especie, edad, peso, estado }); //GUARDA LA DATA EN EL ARRAY
    //GUARDA EN EL LOCAL STORAGE
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
    alert(`Mascota "${nombre}" registrada con éxito.`); //MENSAJE DE REGISTRO EXITOSO DE LA MASCOTA
    console.log(mascotas);
    
}
/*------------FUNCION PARA LISTAR MASCOTAS REGISTRADAS------------*/ 
//
function listarMascotas() {
    //VERIFICA SI HAY MASCOTAS REGISTRADAS Y SI NO ARROJA MENSAJE DE ALERTA 
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }
    //\n GENERA UN SALTO DE LINEA, ACA RECORRE EL ARRAY DE MASCOTAS Y MUESTRA LA DATA EN UNA ALERTA.
    let lista = "Mascotas registradas:\n";
    mascotas.forEach(m => {
        lista += `🐾 ${m.nombre} - ${m.especie} - ${m.edad} años - ${m.peso} kg - Estado: ${m.estado}\n`;
    });
    alert(lista);
}
/*------------FUNCION PARA BUSCAR MASCOTAS REGISTRADAS POR NOMBRE------------*/ 
async function buscarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota a buscar:");
    alert("Buscando mascota... ⏳");
    await delayPromise(1000);

    //VERIFICA SI EL ARRAY TIENE DATOS
    console.log("Mascotas almacenadas:", mascotas);

    let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());

    if (mascota) {
        alert(`🐾 ${mascota.nombre} - ${mascota.especie} - ${mascota.edad} años - ${mascota.peso} kg - Estado: ${mascota.estado}`);
    } else {
        alert("Mascota no encontrada.");
    }
}
/*------------FUNCION PARA ELIMINAR MASCOTAS REGISTRADAS POR NOMBRE------------*/ 
async function eliminarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota a eliminar:");
    let index = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombre.toLowerCase());

    if (index !== -1) {
        mascotas.splice(index, 1);
        localStorage.setItem("mascotas", JSON.stringify(mascotas)); // Guardar cambios en localStorage
        alert(`Mascota "${nombre}" eliminada con éxito.`);
    } else {
        alert("Mascota no encontrada.");
    }
}

async function menu() {
    let opcion;
    do {
        opcion = prompt(`📋 Menú Veterinaria
1. Registrar nueva mascota
2. Listar mascotas
3. Buscar mascota
4. Actualizar estado de salud
5. Eliminar mascota
6. Salir
Seleccione una opción:`);

        switch (opcion) {
            // EL AWAIT ASEGURA QUE TERMINE LA PROMESA ANTES DE CONTINUAR
            case "1":
                await registrarMascota(); 
                break;
            case "2":
                listarMascotas();
                break;
            case "3":
                await buscarMascota(); 
                break;
            case "4":
                actualizarEstadoSalud();
                break;
            case "5":
                await eliminarMascota(); 
                break;
            case "6":
                alert("Saliendo del sistema...");
                break;
            default:
                alert("Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== "6");
}

menu();