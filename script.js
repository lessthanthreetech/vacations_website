document.addEventListener('DOMContentLoaded', function() {
    const contenedorCalendario = document.getElementById('calendario');

    datosVacaciones.forEach(miembro => {
        const elemento = document.createElement('div');
        elemento.innerHTML = `<strong>${miembro.nombre}</strong>: ${miembro.vacaciones.join(', ')}`;
        contenedorCalendario.appendChild(elemento);
    });
});

