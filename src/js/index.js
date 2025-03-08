const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        // Passo 3 - Remover a seleção anterior antes de adicionar a nova
        removerSelecaoDoPersonagem();

        // Passo 2 - Adicionar a classe selecionado no personagem atual
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - Atualizar o personagem grande com os dados do personagem selecionado
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.getAttribute('id');

        imagemPersonagemGrande.src = `./x-men/x-men/src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    });
});

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) { 
        personagemSelecionado.classList.remove('selecionado');
    }
}
