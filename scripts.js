import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const lBotaoDeSalvarItem = document.getElementById("adicionar-item");
lBotaoDeSalvarItem.addEventListener("click", adicionarItem);

const lListaDeItensComprados = document.getElementById("lista-comprados");
verificarListaComprados(lListaDeItensComprados);