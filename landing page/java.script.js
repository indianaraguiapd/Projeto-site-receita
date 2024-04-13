const estrelas =document.querySelectorAll("estrela");
const textDeAvaliacao = document.getElementById("texto-de-avaliacao");
const avaliacaoSelecionada = document.getElementById("avaliacao-selecionada");

let avaliacaoCorrente = 0;

estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        const avaliacao = parseInt(estrela.getAttribute("dado-de-avaliacao"));
        avaliacaoCorrente = avaliacao;
        actualizarAvaliacao();
    });
    estrela.addEventListener("mouseover" , () => {
        const avaliacao = parseInt(estrela.getAttribute("dado-de-avaliacao"));
        destacarEstrelas(avaliacaoCorrente);
    });

    estrela.addEventListener("mouseout", () => {
        destacarEstrelas(avaliacaoCorrente)
    });
});

function destacarEstrelas(avaliacao) {
    estrelas.forEach((estrela) => {
        const estrelaAvaliada =parseInt(estrela.getAttribute("dado-de-avaliacao"));
        if (estrelaAvaliada<= avaliacao){
            estrela.innerHTML ="&#9733;";
        } else{
            estrela.innerHTML = "&#9733;";
        }
    });
}
function actualizarAvaliacao() {
    avaliacaoSelecionada.texContent = avaliacaoCorrente;
    textDeAvaliacao.textContent = 'Avaliacao: ${avaliacaoCorrent} estrelas';
}


