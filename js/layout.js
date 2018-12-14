var botaoLinhaBloco = document.querySelector("#btnMudaLayout")

var botaoAjuda = document.querySelector("#btnAjuda")

    function alteraNome() {
        if (botaoLinhaBloco.textContent === "Blocos") {
            botaoLinhaBloco.textContent = "Linhas"
        } else {
            botaoLinhaBloco.textContent = "Blocos"
        }
    }

var mural = document.querySelector(".mural")

    function mudaClasse() {
        mural.classList.toggle("mural--linha")
    }

/*
botaoLinhaBloco.addEventListener("click", mudaClasse)
botaoLinhaBloco.addEventListener("click", alteraNome)*/

    botaoLinhaBloco.addEventListener("click", function() {
        mudaClasse()
        alteraNome()
})

botaoLinhaBloco.classList.remove("no-js")
/*botaoAjuda.classList.remove("no-js")*/

/* --- areas --- */

function() {
    var botaoAreas = document.querySelector("#btnMudaAreas")

    function alteraNomeAreas() {
        if (botaoAreas.textContent === "Areas") {
            botaoAreas.textContent = "SemBanheiro"
        } else {
            botaoAreas.textContent = "Areas"
        }
    }
    
    var mural = document.querySelector(".mural")

    function mudaAreas() {
        mural.classList.toggle("mural--areas")
    }

botaoAreas.addEventListener("click", function() {
    alteraNomeAreas()
    mudaAreas()
    })


/* ----- TESTE  no Botão de Cor ----- 

var botaoCor = document.querySelector(".opcoesDoCartao-tipo")

function addNoJs() {
    if (!botaoCor.classList.contains("no-js")) {
        botaoCor.classList.add("no-js")
    }
}

addNoJs()
*/