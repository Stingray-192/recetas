function mostrarReceta(id) {
    document.getElementById('recetaPopup' + id).style.display = 'flex';
}

function cerrarReceta(id) {
    document.getElementById('recetaPopup' + id).style.display = 'none';
}
