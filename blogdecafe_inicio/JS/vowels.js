// Código para mostrar las vocales de una frase
function showVowels() {
    let inputFrase = document.getElementById("vowels-input").value;
    let vowels = getVowels(inputFrase);
    document.getElementById("vowels-result").innerText = "Vocales: " + vowels.join(", ");
}

function getVowels(str) {
    // Lógica para encontrar y devolver las vocales de la cadena
}
