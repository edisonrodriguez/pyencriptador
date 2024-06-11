function cifrar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("encabezado-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensaje = document.getElementById("mensaje");
    let btnCopiar = document.getElementById("btn-copiar");

    let textoCifrado = texto.replace(/[aeiou]/g, function(letra) {
        switch (letra) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    if (texto.length !== 0) {
        mensaje.value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "Texto cifrado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        btnCopiar.style.display = "block"; // Mostrar botón de copiar
    } else {
        muñeco.style.display = "block";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas cifrar o descifrar";
        btnCopiar.style.display = "none"; // Ocultar botón de copiar
        alert("Debes ingresar un texto");
    }
}

function descifrar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("encabezado-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensaje = document.getElementById("mensaje");
    let btnCopiar = document.getElementById("btn-copiar");

    let textoDescifrado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (texto.length !== 0) {
        mensaje.value = textoDescifrado;
        tituloMensaje.textContent = "Texto descifrado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        btnCopiar.style.display = "block"; // Mostrar botón de copiar
    } else {
        muñeco.style.display = "block";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas cifrar o descifrar";
        btnCopiar.style.display = "none"; // Ocultar botón de copiar
        alert("Debes ingresar un texto");
    }
}
