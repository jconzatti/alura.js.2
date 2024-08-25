import { obterDataAtualFormatada } from "./obterDataAtualFormatada.js";
import { editarItem } from "./editarItem.js";
import { manterItemComprado } from "./manterItemComprado.js";
import { removerItem } from "./removerItem.js";

let lNumeroDoItem = 0;

export function criarItemDaLista(pNomeDoItem){
    const lItemDaListaDeCompras = document.createElement("li");
    lItemDaListaDeCompras.appendChild(criarConteinerDoItemDaListaDeCompras(pNomeDoItem, lItemDaListaDeCompras));
    lItemDaListaDeCompras.appendChild(criarElementoData());
    return lItemDaListaDeCompras;
}

function criarConteinerDoItemDaListaDeCompras(pNomeDoItem, pElementoItemDaListaDeCompras){
    const lConteinerDoItemDaListaDeCompras = document.createElement("div");
    lConteinerDoItemDaListaDeCompras.classList.add("lista-item-container");
    lConteinerDoItemDaListaDeCompras.appendChild(criarConteinerDoNomeDoItemDaListaDeCompras(pNomeDoItem, pElementoItemDaListaDeCompras));
    lConteinerDoItemDaListaDeCompras.appendChild(criarConteinerDosBotoesDoItemDaListaDeCompras(pElementoItemDaListaDeCompras));
    return lConteinerDoItemDaListaDeCompras
}

function criarElementoData(){
    const lDataDaInclusaoDoItemNaListaDeCompras = document.createElement("p");
    lDataDaInclusaoDoItemNaListaDeCompras.classList.add("texto-data");
    lDataDaInclusaoDoItemNaListaDeCompras.innerText = obterDataAtualFormatada();
    return lDataDaInclusaoDoItemNaListaDeCompras;   
}

function criarConteinerDosBotoesDoItemDaListaDeCompras(pElementoItemDaListaDeCompras){
    const lBotaoRemoverItemDaListaDeCompras = criarBotaoNoItemDaListaDeCompras(
        "./img/delete.svg", 
        "remover", 
        function() {
            removerItem(pElementoItemDaListaDeCompras);
        }
    );

    const lBotaoEditarItemDaListaDeCompras = criarBotaoNoItemDaListaDeCompras(
        "./img/edit.svg", 
        "editar", 
        function() {
            editarItem(pElementoItemDaListaDeCompras); 
        }
    );

    const lConteinerDosBotoesDoItemDaListaDeCompras = document.createElement("div");
    lConteinerDosBotoesDoItemDaListaDeCompras.appendChild(lBotaoRemoverItemDaListaDeCompras);
    lConteinerDosBotoesDoItemDaListaDeCompras.appendChild(lBotaoEditarItemDaListaDeCompras);
    return lConteinerDosBotoesDoItemDaListaDeCompras;
}

function criarBotaoNoItemDaListaDeCompras(pIconeSVG, pTextoAlternativo, pAoClicar){
    const lBotaoNoItemDaListaDeCompras = document.createElement("button");
    lBotaoNoItemDaListaDeCompras.classList.add("item-lista-button");

    const lImagemDoBotaoDoItemDaListaDeCompras = document.createElement("img");
    lImagemDoBotaoDoItemDaListaDeCompras.src = pIconeSVG;
    lImagemDoBotaoDoItemDaListaDeCompras.alt = pTextoAlternativo;

    lBotaoNoItemDaListaDeCompras.appendChild(lImagemDoBotaoDoItemDaListaDeCompras);
    lBotaoNoItemDaListaDeCompras.addEventListener('click', pAoClicar);
    
    return lBotaoNoItemDaListaDeCompras;
}

function criarConteinerDoNomeDoItemDaListaDeCompras(pNomeDoItem, pElementoItemDaListaDeCompras){
    const lConteinerDoNomeDoItemDaListaDeCompras = document.createElement("div");
    lConteinerDoNomeDoItemDaListaDeCompras.appendChild(criarConteinerDoCheckboxDoItemDaListaDeCompras(pElementoItemDaListaDeCompras));
    lConteinerDoNomeDoItemDaListaDeCompras.appendChild(criarNomeDoItemDaListaDeCompras(pNomeDoItem));
    return lConteinerDoNomeDoItemDaListaDeCompras;
}

function criarNomeDoItemDaListaDeCompras(pNomeDoItem){
    const lNomeDoItemDaListaDeCompras = document.createElement("p");
    lNomeDoItemDaListaDeCompras.id = "item-titulo";
    lNomeDoItemDaListaDeCompras.innerText = pNomeDoItem;
    return lNomeDoItemDaListaDeCompras;
}

function criarConteinerDoCheckboxDoItemDaListaDeCompras(pElementoItemDaListaDeCompras){
    const lCampoCheckbox = document.createElement("input");
    lCampoCheckbox.type = "checkbox";
    lCampoCheckbox.classList.add("input-checkbox");
    lCampoCheckbox.id = `checkbox-${++lNumeroDoItem}`;

    const lRotuloCheckbox = document.createElement("label");
    lRotuloCheckbox.setAttribute("for", lCampoCheckbox.id);
    lRotuloCheckbox.addEventListener("click", function(pEvento){
        manterItemComprado(pElementoItemDaListaDeCompras, pEvento);
    });
    lRotuloCheckbox.appendChild(lCampoCheckbox);

    const lCampoCheckboxCustomizado = document.createElement("div");
    lCampoCheckboxCustomizado.classList.add("checkbox-customizado");
    lRotuloCheckbox.appendChild(lCampoCheckboxCustomizado);

    const lConteinerCheckbox = document.createElement("div");
    lConteinerCheckbox.classList.add("container-checkbox");
    lConteinerCheckbox.appendChild(lRotuloCheckbox);
    return lConteinerCheckbox;
}