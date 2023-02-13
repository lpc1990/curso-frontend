function calcularMedia(notas) {
    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];

    }
    let nota1 = notas.lengh;
    let media = soma / notas.length;

    console.log(media);
    return media;

}

function aprovacao(notas) {
    let media = calcularMedia(notas);
    let condicao = media >= 8 ? "Aprovado" : "Reprovado";

    return "Media: " + media + " - Resultado: " + condicao;
}


document.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne que o formuário seja enviado ao pressionar o botão enviar
    event.stopPropagation;

    let meuFormulario1 = document.getElementById('meuFormulario1');
    let dados = new FormData(meuFormulario1);
    let objeto = {};
    let notas = [];

    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);

        //
        notas.push(parseInt(dados.get(key)));
        /* console.log(notas); */
    }

    document.getElementById('resultado').innerHTML = aprovacao(notas);




});