import { criarItemDaLista } from "./criarItemDaLista.js";

const lCampoDeEntradaDoItemDeCompra = document.getElementById("input-item");
const lListaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento){
    evento.preventDefault();
    const lItemDaListaDeCompras = criarItemDaLista(lCampoDeEntradaDoItemDeCompra.value);
    lListaDeCompras.appendChild(lItemDaListaDeCompras);
    lCampoDeEntradaDoItemDeCompra.value = "";
}