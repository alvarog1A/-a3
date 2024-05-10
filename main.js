let numeroSorteado = Math.floor(Math.random() * 10) + 1; // Gera número aleatório entre 1 e 10
let pontos = 0; // Contador de pontos

function verificarPalpite() {
    let palpite = parseInt(document.getElementById('palpite').value);

    if (palpite === numeroSorteado) {
        document.getElementById('resposta').textContent = "Acertou Miserave";
        pontos++;
        alert("Você tem " + pontos + " ponto(s).");
        numeroSorteado = Math.floor(Math.random() * 10) + 1; // Gera novo número aleatório
        document.getElementById('palpite').value = ""; // Limpa o campo de palpite
    } else {
        document.getElementById('resposta').textContent = "Erroooouuuuuuu";
    }
}
