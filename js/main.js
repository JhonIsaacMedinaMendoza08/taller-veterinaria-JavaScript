
/*CREAMOS PRIMERAMENTE EL MENU INTERACTIVO PARA EL USUARIO*/
async function menu() {
    console.log("Bienvenido al sistema de gestión de datos de mascotas");
    let opcion ;
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
            case "1":
                await registrarMascota();
                break;
            case "2":
                await listarMascotas();
                break;
            case "3":
                await buscarMascota();
                break;
            case "4":
                await actualizarSaludMascota();
                break;
            case "5":
                await eliminarMascota();
                break;
            case "6":
                console.log("Gracias por utilizar el sistema de gestión de datos de mascotas");
                alert ("Gracias por utilizar el sistema de gestión de datos de mascotas... ");
                break;
            default:
                console.log("Opción no válida, por favorseleccione una opción válida");
                alert("Opción no válida, por favor seleccione unaopción válida");
                }
        }
        while (opcion != "6");
}
menu();

/*FUNCION PARA REALIZAR EL RETRASO POR MEDIO DE MS*/

function delayPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*CREAMOS LA FUNCION PARA REGISTRAR NUEVA MASCOTA*/
async function registrarMascota(){
    let nombre = prompt("Ingrese el nombre de la mascota:");
    let especie = prompt("Ingrese la especie de la mascota:");
    let edad = prompt("Ingrese la edad de la mascota:");
    let peso = Number(prompt("Ingrese el peso de la mascota:"));
    let salud = prompt("Ingrese el estado de salud de la mascota: (Sano, Enfermo, En tratamiento");

    alert("Se esta registrando una nueva mascota...");
    await delayPromise(2500)

    mascotas.push({nombre,especie,edad,peso,salud})
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
    alert("Mascota " + nombre + " fue registrada con éxito");
    console.log(mascotas);

}
/*CREAMOS LA FUNCION PARA LISTAR TODAS LAS MASCOTAS*/
async function listarMascotas(){
    alert("Se esta listando las mascotas...");
        if (mascotas.length == 0){
            alert("No hay mascotas registradas");
        return;
        }
        let lista = "Mascotas registradas :\n";
        mascotas.forEach(animal => {
            lista += `Nombre: ${animal.nombre}\n`;
            lista += `Especie: ${animal.especie}\n`;
            lista += `Edad: ${animal.edad}\n`;
            lista += `Peso: ${animal.peso}\n`;
            lista += `Salud: ${animal.salud}\n`;
            lista += "------------------------\n";
        });
        alert(lista);
        console.log(lista);
        }

/*CREAMOS LA FUNCION PARA BUSCAR MASCOTAS POR SU NOMBRE*/
async function buscarMascota(){
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea buscar:");
    alert ("Se esta buscando la mascota en la base de datos...");
    await delayPromise(1500);

    let mascotaBuscada = mascotas.find(animal => animal.nombre.toLowerCase() === nombreMascota.toLowerCase());
    if (mascotaBuscada){
        console.log(mascotaBuscada);
        let lista = "La mascota fue encontrada en la base de datos \n"
            lista +=`Nombre: ${mascotaBuscada.nombre}\n`;
            lista += `Especie: ${mascotaBuscada.especie}\n`;
            lista += `Edad: ${mascotaBuscada.edad}\n`;
            lista += `Peso: ${mascotaBuscada.peso}\n`;
            lista += `Salud: ${mascotaBuscada.salud}\n`;
            lista += "------------------------\n";
        ;
        alert(lista);
    }else {
            alert("La mascota " + nombreMascota + " no fue encontrada en la base de datos");
        }
}
/*CREAMOS LA FUNCION PARA ELIMINAR MASCOTAS POR SU NOMBRE*/
async function eliminarMascota(){
    let nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota que desea eliminar:");
    let indexMascota = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascotaEliminar.toLowerCase());

    if (indexMascota !== -1){
        mascotas.splice(indexMascota, 1)
        localStorage.setItem("mascotas", JSON.stringify(mascotas));
        await delayPromise(2000);
        alert("La mascota " + nombreMascotaEliminar + " fue eliminada de la base de datos");
    } else {
        await delayPromise(2000);
        alert("La mascota " + nombreMascotaEliminar + " no fue encontrada en la base de datos")
    }
}

/*CREAMOS LA FUNCION PARA ACTUALIZAR EL ESTADO DE SALUD DE LA MASCOTA POR SU NOMBRE*/
async function actualizarSaludMascota(){
    let nombreMascotaActualizar = prompt("Ingrese el nombre de la mascota que desea actualizar");
    let saludMascotaActualizar = prompt("Ingrese el nuevo estado de salud de la mascota");
    let indexMascotaAct = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascotaActualizar.toLowerCase());
    if (indexMascotaAct !== -1){
        mascotas[indexMascotaAct].salud = saludMascotaActualizar;
        localStorage.setItem("mascotas", JSON.stringify(mascotas));
        await delayPromise(2000);
        alert("El estado de salud de la mascota " + nombreMascotaActualizar + " ha sido actualizado satisfactoriamente");
        console.log(mascotas);
        
    } else {
        await delayPromise(2000);
        alert("La mascota " + nombreMascotaActualizar + " no fue encontrada en la base de datos");
        }
    }

