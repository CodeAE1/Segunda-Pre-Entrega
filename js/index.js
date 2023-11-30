// Catálogo de películas
const catalogoPeliculas = [
    { titulo: 'El Padrino', genero: 'Drama', duracion: 175 },
    { titulo: 'Forrest Gump', genero: 'Drama', duracion: 142 },
    { titulo: 'Pulp Fiction', genero: 'Crimen', duracion: 154 },
    { titulo: 'Titanic', genero: 'Romance', duracion: 195 },
    { titulo: 'Matrix', genero: 'Ciencia ficción', duracion: 136 },
    { titulo: 'El Señor de los Anillos: La Comunidad del Anillo', genero: 'Fantasía', duracion: 178 },
    { titulo: 'La La Land', genero: 'Musical', duracion: 128 },
    { titulo: 'El Rey León', genero: 'Animación', duracion: 88 },
    { titulo: 'Inception', genero: 'Ciencia ficción', duracion: 148 },
    { titulo: 'The Shawshank Redemption', genero: 'Drama', duracion: 142 },
];

// Función para mostrar el catálogo de películas en un alert
function mostrarCatalogo() {
    let catalogoMsg = 'Catálogo de Películas:\n';
    for (let i = 0; i < catalogoPeliculas.length; i++) {
        catalogoMsg += `${i + 1}. ${catalogoPeliculas[i].titulo} - ${catalogoPeliculas[i].genero} - ${catalogoPeliculas[i].duracion} minutos\n`;
    }
    alert(catalogoMsg);
}

  // Función para seleccionar una película
function seleccionarPelicula(index) {
    const pelicula = catalogoPeliculas[index];
    mostrarDetalles(pelicula);
}

  // Función para mostrar detalles de una película
function mostrarDetalles(pelicula) {
    const detallesContainer = document.getElementById('detalles-seleccionadas');
    detallesContainer.innerHTML += `<p>${mostrarDetallesTexto(pelicula)}</p>`;
}

function mostrarDetallesTexto(pelicula) {
    return `Detalles de "${pelicula.titulo}":\nGénero: ${pelicula.genero}\nDuración: ${pelicula.duracion} minutos`;
}

// Función principal
function iniciarSeleccion() {
    // Variable para almacenar las películas seleccionadas
    const peliculasSeleccionadas = [];

    // Permitir al usuario seleccionar hasta 3 películas usando prompt
    for (let i = 0; i < 3; i++) {
    // Mostrar el catálogo en un alert cada vez que el usuario ingresa el número
    mostrarCatalogo();

    const seleccion = parseInt(prompt('Ingresa el número de la película que deseas seleccionar:'));

    // Validar la entrada del usuario
    if (seleccion >= 1 && seleccion <= catalogoPeliculas.length) {
        // Agregar la película seleccionada al array
        peliculasSeleccionadas.push(catalogoPeliculas[seleccion - 1]);
        mostrarDetalles(catalogoPeliculas[seleccion - 1]);
    } else {
        alert('Número de película no válido. Intenta de nuevo.');
        i--; // Decrementar el contador para que el usuario vuelva a intentar la selección
    }
    }

    // Calcular la duración total
    const duracionTotal = peliculasSeleccionadas.reduce((total, pelicula) => total + pelicula.duracion, 0);

    // Mostrar la duración total al usuario
    const duracionTotalContainer = document.getElementById('duracion-total');
    duracionTotalContainer.textContent = `Duración total de las películas seleccionadas: ${duracionTotal} minutos`;

    // Mostrar resultados
    const resultadosContainer = document.getElementById('resultados-container');
    resultadosContainer.style.display = 'block';
}