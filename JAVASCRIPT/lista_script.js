// Obtén referencias a los elementos HTML
const textoInput = document.getElementById('textoInput');
const listaTexto = document.getElementById('listaTexto');

// Array para almacenar los textos ingresados
const textos = [];

// Función para agregar un texto a la lista
function agregarTexto() {
    const texto = textoInput.value.trim().toLowerCase();
    
    if (texto !== '') {
        textos.push(texto); 
        const listItem = document.createElement('li');
        listItem.textContent = texto;
        listaTexto.appendChild(listItem);
        textoInput.value = ''; // Limpiar el input
    }
}

// Función para borrar el último elemento de la lista
function borrarUltimoTexto() {
    if (textos.length > 0) {
        textos.pop(); 
        const listaItems = listaTexto.getElementsByTagName('li');
        listaTexto.removeChild(listaItems[listaItems.length - 1]);
    }
}
