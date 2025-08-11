// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Agregar un amigo a la lista
function agregarAmigo() {
    const input = document.querySelector("#amigo");
    const nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    // Limpiar campo
    input.value = "";
    input.focus();
}

// Mostrar la lista actualizada en pantalla
function actualizarLista() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a pintar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
