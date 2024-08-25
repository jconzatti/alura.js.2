export function obterDataAtualFormatada(){
    const lDataEHoraAtual = new Date();
    const lDiaDaSemanaAtual = iniciarComLetraMaiuscula(lDataEHoraAtual.toLocaleDateString("pt-BR", {weekday: "long"}));
    const lDataAtual = lDataEHoraAtual.toLocaleDateString(); 
    const lHoraAtual = lDataEHoraAtual.toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"}); 
    return `${lDiaDaSemanaAtual} (${lDataAtual}) às ${lHoraAtual}`;
}

function iniciarComLetraMaiuscula(pTexto){
    return pTexto.charAt(0).toUpperCase() + pTexto.slice(1)
}