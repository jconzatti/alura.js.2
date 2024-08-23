const lItemDeCompra = document.getElementById("input-item");
const lBotaoDeSalvarItem = document.getElementById("adicionar-item");
const lListaDeCompras = document.getElementById("lista-de-compras");

lBotaoDeSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();

    const lItemDaListaDeCompras = document.createElement("li");
    const lContainerDoItemDaListaDeCompras = document.createElement("div");
    lContainerDoItemDaListaDeCompras.classList.add("lista-item-container");

    const lContainerDoNomeDoItemDaListaDeCompras = document.createElement("div");
    const lNomeDoItemDaListaDeCompras = document.createElement("p");
    lNomeDoItemDaListaDeCompras.innerText = lItemDeCompra.value;
    lContainerDoNomeDoItemDaListaDeCompras.appendChild(lNomeDoItemDaListaDeCompras);

    const lContainerDosBotoesDoItemDaListaDeCompras = document.createElement("div");
    const lBotaoRemoverDoItemDaListaDeCompras = document.createElement("button");
    lBotaoRemoverDoItemDaListaDeCompras.classList.add("item-lista-button");

    const lImagemDoBotaoRemoverDoItemDaListaDeCompras = document.createElement("img");
    lImagemDoBotaoRemoverDoItemDaListaDeCompras.src = "./img/delete.svg";
    lImagemDoBotaoRemoverDoItemDaListaDeCompras.alt = "remover";

    lBotaoRemoverDoItemDaListaDeCompras.appendChild(lImagemDoBotaoRemoverDoItemDaListaDeCompras);
    
    lContainerDosBotoesDoItemDaListaDeCompras.appendChild(lBotaoRemoverDoItemDaListaDeCompras);

    const lBotaoEditarDoItemDaListaDeCompras = document.createElement("button");
    lBotaoEditarDoItemDaListaDeCompras.classList.add("item-lista-button");

    const lImagemDoBotaoEditarDoItemDaListaDeCompras = document.createElement("img");
    lImagemDoBotaoEditarDoItemDaListaDeCompras.src = "./img/edit.svg";
    lImagemDoBotaoEditarDoItemDaListaDeCompras.alt = "editar";

    lBotaoEditarDoItemDaListaDeCompras.appendChild(lImagemDoBotaoEditarDoItemDaListaDeCompras);
    
    lContainerDosBotoesDoItemDaListaDeCompras.appendChild(lBotaoEditarDoItemDaListaDeCompras);

    lContainerDoItemDaListaDeCompras.appendChild(lContainerDoNomeDoItemDaListaDeCompras);
    lContainerDoItemDaListaDeCompras.appendChild(lContainerDosBotoesDoItemDaListaDeCompras);
    lItemDaListaDeCompras.appendChild(lContainerDoItemDaListaDeCompras);

    const lDataDaInclusaoDoDoItemNaListaDeCompras = document.createElement("p");
    lDataDaInclusaoDoDoItemNaListaDeCompras.classList.add("texto-data");
    lDataDaInclusaoDoDoItemNaListaDeCompras.innerText = "Quinta-feira (22/08/2024) às 23:30";

    lItemDaListaDeCompras.appendChild(lDataDaInclusaoDoDoItemNaListaDeCompras);
    lListaDeCompras.appendChild(lItemDaListaDeCompras);
}