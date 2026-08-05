let alterado = false

function alterarTexto(){

    const titulo = document.getElementById("titulo")

    if(alterado == false){

        titulo.textContent = "Atividade de Revisão."
        alterado = true

    }else{

        titulo.textContent = "Revisão da alteração do HTML utilizando Javascript."
        alterado = false

        }
    }
