import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

export function adicionarItem(pEvento){
    pEvento.preventDefault();
    const lCampoDeEntradaDoItemDeCompra = document.getElementById("input-item");
    const lListaDeCompras = document.getElementById("lista-de-compras");
    const lNomeDoItem = lCampoDeEntradaDoItemDeCompra.value;
    if (lNomeDoItem){
        const lItemDaListaDeCompras = criarItemDaLista(lNomeDoItem);
        lListaDeCompras.appendChild(lItemDaListaDeCompras);
        verificarListaVazia(lListaDeCompras);
        lCampoDeEntradaDoItemDeCompra.value = "";
    }
}