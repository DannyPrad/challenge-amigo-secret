let nomes = [];

// Adiciona o nome à lista de amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    nomes.push(nome);
    exibirNomes();
    input.value = '';
}

// Exibe os nomes na lista
function exibirNomes() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Realiza o sorteio dos amigos secretos
function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio.');
        return;
    }

    const sorteio = [...nomes];
    sorteio.sort(() => Math.random() - 0.5);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        const amigo = document.createElement('li');
        const nome1 = nomes[i];
        const nome2 = sorteio[(i + 1) % sorteio.length];
        amigo.textContent = `${nome1} tirou ${nome2}`;
        resultado.appendChild(amigo);
    }
}

