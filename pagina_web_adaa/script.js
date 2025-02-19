// script.js
function generarRutina() {
    const nombre = document.getElementById("nombre").value;
    const nivel = document.getElementById("nivelAprendizaje").value;
    const tipoNatacion = document.getElementById("tipoNatacion").value;
    const estilo = document.getElementById("estiloNado").value;
    const duracion = parseInt(document.getElementById("duracion").value);
    
    if (!nombre || isNaN(duracion)) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    let calentamiento = "10 min movilidad articular + 400m nado variado";
    let ejercicio = "";
    let material = tipoNatacion === "piscina" ? "Palas y pull buoy" : "Neopreno y aletas";

    if (nivel === "principiante") {
        ejercicio = duracion <= 30 ? "4x50m " + estilo + " técnica y patada" : "6x100m " + estilo + " a ritmo moderado";
    } else if (nivel === "intermedio") {
        ejercicio = duracion <= 30 ? "6x50m " + estilo + " velocidad moderada" : "10x100m " + estilo + " con cambios de ritmo";
    } else {
        ejercicio = duracion <= 30 ? "8x50m " + estilo + " a alta intensidad" : "12x100m " + estilo + " resistencia avanzada";
    }

    const rutina = `
        <strong>${nombre}, tu rutina es:</strong><br>
        <strong>Duración: ${duracion} minutos</strong><br>
        <strong>Calentamiento:</strong> ${calentamiento}<br>
        <strong>Ejercicio:</strong> ${ejercicio}<br>
        <strong>Material:</strong> ${material}
    `;
    
    document.getElementById("contenidoRutina").innerHTML = `<div class='rutina-box'>${rutina}</div>`;
}
