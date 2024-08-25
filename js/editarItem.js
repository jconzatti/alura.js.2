import { obterDataAtualFormatada } from "./obterDataAtualFormatada.js";

export function editarItem(pElementoItemDaListaDeCompras){
    const lElementoComNomeDoItem = pElementoItemDaListaDeCompras.querySelector("#item-titulo");
    const lNovoValorDoNomeDoItem = prompt('Editar o item:', lElementoComNomeDoItem.innerText);
    if (lNovoValorDoNomeDoItem){
        lElementoComNomeDoItem.innerText = lNovoValorDoNomeDoItem;

        const lDataDaInclusaoDoItemNaListaDeCompras = pElementoItemDaListaDeCompras.querySelector(".texto-data");
        lDataDaInclusaoDoItemNaListaDeCompras.innerText = obterDataAtualFormatada();
    } 
}