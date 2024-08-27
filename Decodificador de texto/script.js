function criptografarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

let inputTexto = document.querySelector('textarea');
let btnCriptografar = document.getElementById('btn-criptografar');
let btnDescriptografar = document.getElementById('btn-descriptografar');
let outputContainer = document.getElementById('output-container');

btnCriptografar.addEventListener('click', () => {
    let texto = inputTexto.value.toLowerCase();
    let textoCriptografado = criptografarTexto(texto);
    mostrarResultado(textoCriptografado);
});

btnDescriptografar.addEventListener('click', () => {
    let texto = inputTexto.value.toLowerCase();
    let textoDescriptografado = descriptografarTexto(texto);
    mostrarResultado(textoDescriptografado);
});

function mostrarResultado(texto) {
    var notFoundContainer = document.getElementById('text-not-found');
    var responseContainer = document.getElementById('response');

    var textResponseElement = document.getElementById("encrypted-text");

    if(texto) {
        console.log("teste")
        responseContainer.style.display = "flex";
        notFoundContainer.style.display = "none";
        
        textResponseElement.innerHTML = "";
        textResponseElement.innerHTML = texto;
        return;
    }
    notFoundContainer.style.display = "flex";
    responseContainer.style.display = "none";
}