function jogadorZeus(){
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var contaAdicao = prompt(`A soma de 18 + 42 é:`);
        if (contaAdicao == null){
            break;
        }else if (parseInt(contaAdicao) === 60){
            alert("PARABÉNS!! PRÓXIMA FASE...");
            faseDois()
            break;
        }else if(parseInt(contaAdicao) != 60){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }        
        
    }
}

function faseDois(){
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var contaSubtrai = prompt(`A subtração de 450 - 30 é:`);
        if (contaSubtrai == null){
            break;
        }else if (parseInt(contaSubtrai) === 420){
            alert("PARABÉNS!! PRÓXIMA FASE...");
            faseTres()
            break;
        }else if(parseInt(contaSubtrai) != 420){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }    
        }
    }
}

function faseTres(){
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var contaMultiplica = prompt(`A multiplicação de 60 * 2 é:`);
        if(contaMultiplica == null){
            break;
        }else if (parseInt(contaMultiplica) === 120){
            alert("PARABÉNS!! PRÓXIMA FASE...");
            faseQuatro()
            break;
        }else if(parseInt(contaMultiplica) != 120){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }    
        }
    }
}

function faseQuatro(){
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var contaDivisao = prompt(`A divisão de 35 / 7 é`);
        if(contaDivisao == null){
            break;
        }else if (parseInt(contaDivisao) === 5){
            alert("PARABÉNS!! Você Venceu!!");
            break;
        }else if(parseInt(contaDivisao) != 5){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }    
        }
    }
}