function cifrar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("encabezado-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let mensaje = document.getElementById("mensaje");
    let btnCopiar = document.getElementById("btn-copiar");

    let textoCifrado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (texto.length !== 0) {
        mensaje.value = textoCifrado;
        tituloMensaje.textContent = "Texto cifrado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        btnCopiar.style.display = "block"; // Mostrar botón de copiar
    } else {
        muñeco.style.display = "block";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
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
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas cifrar o descifrar";
        btnCopiar.style.display = "none"; // Ocultar botón de copiar
        alert("Debes ingresar un texto");
    }
}


// Seleccionar el botón de copiar
const btnCopiar = document.getElementById("btn-copiar");

// Agregar evento de clic al botón de copiar
btnCopiar.addEventListener("click", copiarTexto);

// Función para copiar el texto del textarea de resultado
function copiarTexto() {
    const mensaje = document.getElementById("mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("¡El texto ha sido copiado!");
}
