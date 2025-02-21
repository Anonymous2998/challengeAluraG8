let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    // Validación: solo letras y espacios
    let regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (!regex.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Vuelva a escribir la lista de amigos.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;

    // Limpiar la lista de amigos después del sorteo
    amigos = []; // Vaciar el array de amigos
    actualizarLista(); // Actualizar la interfaz para reflejar la lista vacía
}
