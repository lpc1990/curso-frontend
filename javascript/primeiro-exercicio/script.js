function obterMedia(){

    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    var d = parseInt(document.getElementById("d").value)

    var media = (a + b + c + d) / 4

    document.getElementById("resultado").innerHTML = "A média das notas é " + media

    /* console.log(a + b + c + c) */
}