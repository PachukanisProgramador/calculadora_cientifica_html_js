var num1 = 0;
var num2 = 0;
var resultadoOperacao = 0;

function mostrarSoma(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " + ";
    
}
function mostrarSubt(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " - ";
}
function mostrarDivi(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " / ";
}
function mostrarMult(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " X ";
}
function resultadoPot(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " pot ";
}
function resultadoRaiz(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " raiz";
}
function mostrarSen(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " sen";
}
function mostrarCos(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " cos";
}
function mostrarTang(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " tang";
}
function mostrarMod(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " mod";
}
function mostrarLog(){
    num1 = document.getElementById('tResultado').value;
    document.getElementById('tResultado').value = num1 + " log";
}
function apagarValores(){
    document.getElementById('tResultado').value = "";
}

function coletar(){
    var resultado = document.getElementById('tResultado').value
    if(resultado.includes(" + ")){
        conta = resultado.split(" + ");
        num2 = parseFloat(conta[1]);
        document.getElementById('tResultado').value = Number(num1) + Number(num2);
    }
    else{
        if(resultado.includes(" - ")){
            conta = resultado.split(" - ");
            num2 = parseFloat(conta[1]);
            document.getElementById('tResultado').value = num1 - num2;
        }
        else{
            if(resultado.includes(" / ")){
                conta = resultado.split(" / ");
                num2 = parseFloat(conta[1]);
                document.getElementById('tResultado').value = parseFloat(num1) / parseFloat(num2);
            }
            else{
                if(resultado.includes(" X ")){
                    conta = resultado.split(" X ");
                    num2 = parseFloat(conta[1]);
                    document.getElementById('tResultado').value = num1 * num2;
                }
                else{
                    if(resultado.includes(" pot ")){
                        conta = resultado.split(" pot ");
                        num2 = parseFloat(conta[1]);
                        document.getElementById('tResultado').value = Math.pow(num1, num2);
                    }
                    else{
                        if(resultado.includes(" raiz")){
                            document.getElementById('tResultado').value = Math.sqrt(num1);
                        }
                        else{
                            if(resultado.includes(" sen")){
                                document.getElementById('tResultado').value = Math.sin(num1);
                            }
                            else{
                                if(resultado.includes(" cos")){
                                    document.getElementById('tResultado').value = Math.cos(num1);
                                }
                                else{
                                    if(resultado.includes(" tang")){
                                        document.getElementById('tResultado').value = Math.tan(num1);
                                    }
                                    else{
                                        if(resultado.includes(" mod")){
                                            if(num1 < 0){
                                                document.getElementById('tResultado').value = num1 * (-1);
                                            }
                                            else{
                                                document.getElementById('tResultado').value = num1;
                                            }
                                        }
                                        else{
                                            if(resultado.includes(" log")){
                                                console.log("Fazendo o log");
                                                document.getElementById('tResultado').value = Math.log10(num1);
                                            }
                                            else{
                                                console.log("Erro fatal. Operação não encontrada.");
                                            }
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
}
