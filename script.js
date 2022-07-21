function olamundo(){
    //alerta
    alert('olá mundo');
    //console
    console.log('olá mundo');
}

function somar(x,y) {
    //criaei uma variável e operação
    var somar = x + y;
    //retorno o valor
    return somar;
}

function calcula(x,y) {
    var valor1 = document.getElementByid('valor1');
    var valor2 = document.getElementByid('valor2');
    var soma = valor1 + valor2;
    alert(soma);
    return false;
}


//executa das funções
olamundo();

//executa função e retorna valor
var valor1 = 9;
var valor2 = 6;
var resultado = somar( valor1,valor2);
alert(resultado);