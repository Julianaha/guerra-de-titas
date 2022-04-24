function jogadorPandora(){
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var primeiraCondicao = prompt(`Qual é a caracteristica da DEUSA AFRODITE? Insira a letra da resposta correta: \nA- Deusa da Fertilidade \nB- Mulher das trevas \nC- Deusa da beleza`);
        if(primeiraCondicao == null){
            break;
        }else if(primeiraCondicao.toLowerCase() == "c"){
            alert("Resposta correta!Vamos para próxima...");
            pandoraFaseDois()
            break;
        }else if (primeiraCondicao.toLowerCase() == "a" || primeiraCondicao.toLowerCase() == "b"){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
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

function pandoraFaseDois() {
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var segundaCondicao = prompt(`Qual é a caracteristica da Deusa Héstia? Insira a letra da resposta correta: \nA- Deusa do Lar \nB- Deusa da Terra \nC- Deusa da Sabedoria`);
        if(segundaCondicao == null){
            break;
        }else if(segundaCondicao.toLowerCase() == "a"){
            alert("Resposta correta!Vamos para próxima...")
            pandoraFaseTres()
            break;
        } else if(segundaCondicao.toLowerCase() == "b" || segundaCondicao.toLowerCase() == "c"){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
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

function pandoraFaseTres() {
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var terceiraCondicao = prompt(`Qual é a caracteristica da Deusa Gaia? Insira a letra da resposta correta: \nA- Deusa dos Mares \nB-Deusa do Submundo \nC-Deusa da Terra`);
        if(terceiraCondicao == null){
            break;
        }else if(terceiraCondicao.toLowerCase() == "c"){
            alert("Resposta correta! Vamos para próxima...");
            pandoraFaseQuatro()
            break;
        }else if (terceiraCondicao.toLowerCase() == "a" || terceiraCondicao.toLowerCase() == "b"){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
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

function pandoraFaseQuatro() {
    var cont = 2;
    for (var i = 0; i < cont; i++) {

        var quartaCondicao = prompt(`Qual é a caracteristica da DEUSA ATENA? Insira a letra da resposta correta: \nA-Deusa da Caça \nB-Deusa da Paz e Harmonia \nC-Deusa da Sabedoria e da Guerra`);
        if(quartaCondicao == null){
            break;
        }else if(quartaCondicao.toLowerCase() == "c"){
            alert("Resposta correta!Vamos para próxima...")
            pandoraFaseCinco()
            break;
        }else if (quartaCondicao.toLowerCase() == "a" || quartaCondicao.toLowerCase() == "b"){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
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

function pandoraFaseCinco() {
    var cont = 2;

    for (var i = 0; i < cont; i++) {

        var quintaCondicao = prompt(`Qual é a caracteristica da DEUSA HERA? Insira a letra da resposta correta: \nA-Deusa dos céus \nB- Deusa das deusas \nC- Deusa do Amanhecer`)
        if(quintaCondicao == null){
            break;
        }else if( quintaCondicao.toLowerCase() == "b"){
            alert("PARABÉNS!! Você Venceu!!");
            break;
        } else if (quintaCondicao.toLowerCase() == "c" || quintaCondicao.toLowerCase() == "a"){
            if(i < 1){
                alert(`Resposta errada!! Vou te dar mais uma chance!`);
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