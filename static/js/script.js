function carregarDados() {
    fetch('/dados')
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').textContent = data.mensagem;
        })
        .catch(error => console.error('Erro:', error));
        }