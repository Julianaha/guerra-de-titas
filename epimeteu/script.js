function jogadorEpimeteu(){
    var cont = 2;
    var resultado = "avestruz";

    for (var i = 0; i < cont; i++) {
        
        var solucaoUm = prompt(`Quando me assusto ponho a cabeça na terra. Tenho asas sem voar mas se corro não consegues apanhar! Que animal eu sou? `);
        if(solucaoUm == null){
            break;
        }else if (solucaoUm.toLowerCase() === resultado){
            alert("PARABÉNS!! PROXIMA FASE...");
            faseDois()
            break;
        }else if(solucaoUm.toLowerCase() != resultado){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar uma dica: Tem 8 letras!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }else {
            if (i < 2) {
                alert("Opção inválida!! Leia a pergunta com atenção e confira sua resposta!!");
            } 
        }

    }
}

function faseDois(){
    var cont = 2;
    var resultado1 = "centopeia";

    for (var i = 0; i < cont; i++) {
        
        var solucaoDois = prompt(`Qual é o animal que demora mais a tirar os sapatos?`);
        if(solucaoDois == null){
            break;
        }else if (solucaoDois.toLowerCase() === resultado1){
            alert("PARABÉNS!! PROXIMA FASE...");
            faseTres()
            break;
        }else if(solucaoDois.toLowerCase() != resultado1){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar uma dica: Tem 9 letras!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }else {
            if (i < 2) {
                alert("Opção inválida!! Leia a pergunta com atenção e confira sua resposta!!");
            } 
        }
    }
}

function faseTres(){
    var cont = 2;
    var resultado2 = "peixe";

    for (var i = 0; i < cont; i++) {
        
        var solucaoTres = prompt(`Qual é o animal que não fecha os olhos?`);
        if(solucaoTres == null){
            break;
        }else if (solucaoTres.toLowerCase() === resultado2){
            alert("PARABÉNS!! PROXIMA FASE...");
            faseQuatro()
            break;
        }else if(solucaoTres.toLowerCase() != resultado2){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar uma dica: Tem 5 letras!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }else {
            if (i < 2) {
                alert("Opção inválida!! Leia a pergunta com atenção e confira sua resposta!!");
            } 
        }

    }

}

function faseQuatro(){
    var cont = 2;
    var resultado3 = "formiga";

    for (var i = 0; i < cont; i++) {
        
        var solucaoQuatro = prompt(`Vão carregadas, voltam carregadas e não param pelo caminho. Que animal eu sou?`);
        if(solucaoQuatro == null){
            break;
        }else if (solucaoQuatro.toLowerCase() === resultado3){
            alert("PARABÉNS!! PROXIMA FASE...");
            faseCinco()
            break;
        }else if(solucaoQuatro.toLowerCase() != resultado3){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar uma dica: Tem 7 letras!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }else {
            if (i < 2) {
                alert("Opção inválida!! Leia a pergunta com atenção e confira sua resposta!!");
            } 
        }

    }

}


function faseCinco(){
    var cont = 2;
    var resultado4 = "pomba";

    for (var i = 0; i < cont; i++) {
        
        var solucaoCinco = prompt(`Às vezes sou mensageira e símbolo da paz, mas podes encontrar-me nos parques e jardins. Que animal eu sou? `)
        if(solucaoCinco == null){
            break;
        }else if (solucaoCinco.toLowerCase() === resultado4){
            alert("PARABÉNS!! Você Venceu!!");
            break
        }else if(solucaoCinco.toLowerCase() != resultado4){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar uma dica: Tem 5 letras!`);
            }else if (i == 1){
                alert("Game over! Tente novamente!!");
            }
        }else {
            if (i < 2) {
                alert("Opção inválida!! Leia a pergunta com atenção e confira sua resposta!!");
            } 
        }

    }

}