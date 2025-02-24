let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validación: solo letras y espacios
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

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
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Por favor, agregue nombres.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

function nuevoSorteo() {
    // Limpiar la lista de amigos y el resultado anterior
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
    alert("Lista reiniciada. Puede agregar nuevos nombres para el próximo sorteo.");
}
