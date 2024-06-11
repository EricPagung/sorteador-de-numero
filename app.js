function valoresId(id) {
    return parseInt(document.getElementById(id).value);
}

function sortear() {
    let quantidade = valoresId('quantidade');
    let de = valoresId('de');
    let ate = valoresId('ate');
    if (de == ate){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">ERRO!</label>` ;
        alterarStatusBotao();
    }
    if (quantidade > ate) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">ERRO!</label>` ;
        alterarStatusBotao();
    } if (de > ate ) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">ERRO!</label>` ;
        alterarStatusBotao();
        } if (ate > quantidade && de < ate) {
            sortearnumeros();
        }

function sortearnumeros() {
        let sorteados = [];
        let numero;
    
        while (sorteados.length <= quantidade - 1) {
            numero = sorteadorDeNumeros(de, ate);
            console.log(numero);
            if (sorteados.includes(numero) == false) {
                sorteados.push(numero);
            }
        }
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>` ;
        alterarStatusBotao()
    } 
}

function sorteadorDeNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}