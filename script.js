let titulo = document.querySelector("h1");
let botao = document.querySelector("button");

botao.addEventListener("click", alterarTituloPrincipal);

function alterarTituloPrincipal() {
    if (titulo.innerText === "Revisão da alteração do HTML utilizando Javascript") {
        titulo.innerText = "Fui alterado pelo botão";
    } else {
        titulo.innerText = "Revisão da alteração do HTML utilizando Javascript";
    }
}
