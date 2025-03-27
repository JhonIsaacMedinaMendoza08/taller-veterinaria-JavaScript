function menu() {
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
            case "1":
                registrarMascota();
                break;
            case "2":
                listarMascotas();
                break;
            case "3":
                buscarMascota();
                break;
            case "4":
                actualizarEstadoSalud();
                break;
            case "5":
                eliminarMascota();
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