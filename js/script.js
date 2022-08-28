console.log("Javascript is running! Have fun! =)");

//dichiaro la variabile del mio dado
let mioDado;
//dichiaro la variabile del computer
let pcDado;

//ogni volta che clicco il pulsante gioca
let button=document.getElementById("button");
button.addEventListener('click', function(){
    //genera valori random dei due dadi
    mioDado=Math.floor(Math.random() * 6) + 1; //genera valori random tra 1 e 6
    pcDado=Math.floor(Math.random() * 6) + 1;
    console.log(`mio dado: ${mioDado} pc dado: ${pcDado}`);

    //se il mio dado > pc dado allora stampa "Complimenti, hai vinto! =D "
    if(mioDado>pcDado){
        console.log("Complimenti, hai vinto! =) ");
    }
    //se il mio dado = pc dado stampa "Uhh, pareggio! ='|   Rilancia! .. Chissà chi avrà la meglio!  :O"
    if(mioDado==pcDado){
        console.log("Uhh, pareggio! ='|   Rilancia! .. Chissà chi avrà la meglio!  :O");
    }
    //se il mio dado < pc dado stampa "La fortuna non e' dalla tua parte! ='( "
    if(mioDado<pcDado){
        console.log("La fortuna non e' dalla tua parte! ='( ");
    }
})

