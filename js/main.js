const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    }
}
controle.forEach((e) => {
    e.addEventListener('click', (e) => {
        manipularDados(e.target.dataset.controle, e.target.parentNode)
        atualizaEstatisticas(e.target.dataset.peca)
    })
})

function manipularDados(operation, controle){
    const peca = controle.querySelector('[data-contador]');
    if(operation === '+'){
        peca.value++;
    } else {
        peca.value--;
    }
} 

function atualizaEstatisticas(peca) {
    estatisticas.forEach((e) => {
        e.textContent = parseInt(e.textContent) + pecas[peca] [e.dataset.estatistica]
    })
}

