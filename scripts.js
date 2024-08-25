const lCampoDeEntradaDoItemDeCompra = document.getElementById("input-item");
const lBotaoDeSalvarItem = document.getElementById("adicionar-item");
const lListaDeCompras = document.getElementById("lista-de-compras");
let lNumeroDoItem = 2;
lBotaoDeSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();

    const lItemDaListaDeCompras = document.createElement("li");
    const lContainerDoItemDaListaDeCompras = document.createElement("div");
    lContainerDoItemDaListaDeCompras.classList.add("lista-item-container");

    const lContainerDoNomeDoItemDaListaDeCompras = document.createElement("div");

    const lConteinerCheckbox = document.createElement("div");
    lConteinerCheckbox.classList.add("container-checkbox");

    const lCampoCheckbox = document.createElement("input");
    lCampoCheckbox.type = "checkbox";
    lCampoCheckbox.classList.add("input-checkbox");
    lCampoCheckbox.id = "checkbox-" + lNumeroDoItem++;

    const lRotuloCheckbox = document.createElement("label");
    lRotuloCheckbox.setAttribute("for", lCampoCheckbox.id);

    const lCampoCheckboxCustomizado = document.createElement("div");
    lCampoCheckboxCustomizado.classList.add("checkbox-customizado");

    lRotuloCheckbox.appendChild(lCampoCheckbox);
    lRotuloCheckbox.appendChild(lCampoCheckboxCustomizado);

    lConteinerCheckbox.appendChild(lRotuloCheckbox);

    const lNomeDoItemDaListaDeCompras = document.createElement("p");
    lNomeDoItemDaListaDeCompras.innerText = lCampoDeEntradaDoItemDeCompra.value;

    lContainerDoNomeDoItemDaListaDeCompras.appendChild(lConteinerCheckbox);
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
    lCampoDeEntradaDoItemDeCompra.value = "";
}