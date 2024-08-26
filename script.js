function encriptar() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'eje')
        .replace(/i/g, 'isle')
        .replace(/a/g, 'ari')
        .replace(/o/g, 'ols')
        .replace(/u/g, 'und');
    
    document.getElementById('outputText').value = encryptedText;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/eje/g, 'e')
        .replace(/isle/g, 'i')
        .replace(/ari/g, 'a')
        .replace(/ols/g, 'o')
        .replace(/und/g, 'u');

    document.getElementById('outputText').value = decryptedText;
}

function copiar() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
