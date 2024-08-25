import { verificarListaComprados } from "./verificarListaComprados.js";

export function manterItemComprado(pElementoItemDaListaDeCompras, pEvento){
    const lListaDeCompras = document.getElementById("lista-de-compras");
    const lListaDeItensComprados = document.getElementById("lista-comprados");
    const checkboxInput = pEvento.currentTarget.querySelector(".input-checkbox");
    const checkboxCustomizado = pEvento.currentTarget.querySelector(".checkbox-customizado");
    const itemTitulo = pEvento.currentTarget.closest("li").querySelector("#item-titulo");
    if (checkboxInput.checked){
        checkboxCustomizado.classList.add("checked"); 
        itemTitulo.style.textDecoration = "line-through";
        lListaDeItensComprados.appendChild(pElementoItemDaListaDeCompras);
    } else {
        checkboxCustomizado.classList.remove("checked");   
        itemTitulo.style.textDecoration = "none"; 
        lListaDeCompras.appendChild(pElementoItemDaListaDeCompras);
    }
    
    verificarListaComprados(lListaDeItensComprados);
}