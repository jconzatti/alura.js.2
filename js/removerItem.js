import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const removerItem = (pElementoItemDaListaDeCompras) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    if (confirmacao){
        pElementoItemDaListaDeCompras.remove();
        
        const lListaDeCompras = document.getElementById("lista-de-compras");
        const lListaDeItensComprados = document.getElementById("lista-comprados");
        verificarListaVazia(lListaDeCompras);
        verificarListaComprados(lListaDeItensComprados);
    }
}

export {removerItem}