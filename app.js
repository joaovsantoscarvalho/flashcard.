function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';


cartao.innerHTML = `
<div class="catao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>${resposta}</p>
    </div>
</div>
 `
 let respostaEtaVisivel = false;

 function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    catao.classList.toggle('active', respostaEsraVisivel)
}
cartao.addEventListener('click', viraCartao)

 container.appendChild(cartao)
}